"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { pages } from "@/content/book";
import { renderPage } from "./Pages";

type FlipApi = {
  pageFlip: () => {
    flipNext: () => void;
    flipPrev: () => void;
    getPageCount: () => number;
    getCurrentPageIndex: () => number;
  };
};

const PAGE_W = 420;
const PAGE_H = 600;

export default function Book() {
  const bookRef = useRef<FlipApi | null>(null);
  const total = pages.length;
  // ?p=N abre direto numa página (útil pra testar / mandar link de uma página)
  const startPage = (() => {
    if (typeof window === "undefined") return 0;
    const n = Number(new URLSearchParams(window.location.search).get("p"));
    return Number.isFinite(n) && n > 0 && n < total ? n : 0;
  })();
  const [current, setCurrent] = useState(startPage);

  // Cooldown: enquanto uma página está virando (e por um instante depois),
  // nenhuma outra virada é aceita — nem botão, nem teclado, nem toque.
  const locked = useRef(false);
  const unlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const COOLDOWN_MS = 600;

  const lock = useCallback(() => {
    locked.current = true;
    if (unlockTimer.current) clearTimeout(unlockTimer.current);
  }, []);
  const scheduleUnlock = useCallback(() => {
    if (unlockTimer.current) clearTimeout(unlockTimer.current);
    unlockTimer.current = setTimeout(() => {
      locked.current = false;
    }, COOLDOWN_MS);
  }, []);

  const next = useCallback(() => {
    if (locked.current) return;
    lock();
    bookRef.current?.pageFlip()?.flipNext();
  }, [lock]);
  const prev = useCallback(() => {
    if (locked.current) return;
    lock();
    bookRef.current?.pageFlip()?.flipPrev();
  }, [lock]);

  // Bloqueia toque/clique direto no livro durante o cooldown
  // (captura no pai impede o evento de chegar no react-pageflip).
  const guard = useCallback((e: React.SyntheticEvent) => {
    if (locked.current) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const atStart = current === 0;
  const atEnd = current >= total - 1;

  return (
    <div className="w-full max-w-[920px] mx-auto px-1 sm:px-6">
      <div
        className="relative"
        onMouseDownCapture={guard}
        onTouchStartCapture={guard}
        onClickCapture={guard}
      >
        <HTMLFlipBook
          ref={bookRef as never}
          className="book"
          style={{}}
          startPage={startPage}
          size="stretch"
          width={PAGE_W}
          height={PAGE_H}
          minWidth={280}
          maxWidth={460}
          minHeight={400}
          maxHeight={660}
          drawShadow
          flippingTime={1000}
          usePortrait
          startZIndex={0}
          autoSize
          maxShadowOpacity={0.45}
          showCover
          mobileScrollSupport
          clickEventForward
          useMouseEvents
          swipeDistance={30}
          showPageCorners
          disableFlipByClick={false}
          onFlip={(e: { data: number }) => setCurrent(e.data)}
          onChangeState={(e: { data: string }) => {
            if (e.data === "flipping" || e.data === "user_fold") lock();
            else if (e.data === "read") scheduleUnlock();
          }}
        >
          {pages.map((p, i) => renderPage(p, i))}
        </HTMLFlipBook>
      </div>

      <div className="mt-5 flex items-center justify-center gap-3 sm:mt-7 sm:gap-4">
        <button type="button" onClick={prev} disabled={atStart} className="btn btn-ghost" aria-label="Página anterior">
          ← voltar
        </button>
        <span className="ui-text min-w-[6ch] text-center text-sm text-creme/70 tabular-nums">
          {atStart ? "capa" : atEnd ? "fim" : `${current} / ${total - 2}`}
        </span>
        <button type="button" onClick={next} disabled={atEnd} className="btn btn-primary" aria-label="Próxima página">
          virar →
        </button>
      </div>
      <p className="ui-text mt-3 text-center text-xs text-creme/40">
        arraste o canto da página pra virar
      </p>
    </div>
  );
}
