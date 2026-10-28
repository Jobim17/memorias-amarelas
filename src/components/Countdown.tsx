"use client";

import { useEffect, useState } from "react";
import { launchDate, nickname } from "@/content/book";
import { CoverPreview } from "./Pages";

function diff(target: Date) {
  const ms = Math.max(0, target.getTime() - Date.now());
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

const two = (n: number) => String(n).padStart(2, "0");

export default function Countdown({ onDone }: { onDone: () => void }) {
  const target = new Date(launchDate);
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => {
      const d = diff(target);
      setT(d);
      if (d.days + d.hours + d.minutes + d.seconds === 0) onDone();
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const blocks = [
    [t.days, "dias"],
    [t.hours, "horas"],
    [t.minutes, "min"],
    [t.seconds, "seg"],
  ] as const;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-12 text-center">
      <p className="chapter-label !text-amarelo">lançamento em 27 de novembro</p>
      <h1
        className="mt-3 text-creme"
        style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 9vw, 64px)", lineHeight: 0.95, letterSpacing: "0.03em" }}
      >
        Memórias Amarelas
      </h1>
      <p className="mt-3 max-w-[36ch] italic text-creme/70" style={{ fontSize: "clamp(15px, 4vw, 18px)" }}>
        Segura a ansiedade, {nickname}. Esse livro ainda está amadurecendo:
        quando ficar bem amarelinho, ele abre.
      </p>

      <div className="mt-9 grid grid-cols-4 gap-3 sm:gap-6">
        {blocks.map(([n, label]) => (
          <div key={label} className="flex flex-col items-center">
            <span className="count-num">{two(n)}</span>
            <span className="count-label mt-2">{label}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 w-[min(62vw,260px)] rotate-[-3deg] floaty drop-shadow-[0_30px_40px_rgba(0,0,0,.55)]">
        <CoverPreview />
      </div>
    </main>
  );
}
