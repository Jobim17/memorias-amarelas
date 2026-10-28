"use client";

import { forwardRef, type ReactNode } from "react";
import {
  age,
  authorName,
  birthday,
  pages,
  playlistUrl,
  recipientName,
  type ChapterPage,
  type Page,
} from "@/content/book";
import { Polaroid, Tape } from "./scrap/Bits";
import { DoodleArt } from "./scrap/Doodles";
import { Barcode, CoverCat } from "./scrap/CoverArt";

/* Cada página precisa ser um componente que repassa o ref pro <div> raiz
   (exigência do react-pageflip). */

type PageProps = {
  children: ReactNode;
  side: "left" | "right";
  number?: number;
  runningHead?: string;
  className?: string;
  hard?: boolean;
};

const Sheet = forwardRef<HTMLDivElement, PageProps>(function Sheet(
  { children, side, number, runningHead, className = "", hard },
  ref,
) {
  return (
    <div
      ref={ref}
      data-density={hard ? "hard" : "soft"}
      className={`sheet relative h-full w-full overflow-hidden select-none ${
        hard ? "cover-flat board" : `paper page-${side}`
      } ${className}`}
    >
      {runningHead && !hard && (
        <div
          className={`running-head absolute top-[3.2cqw] ${
            side === "left" ? "left-[7.5cqw]" : "right-[7.5cqw]"
          }`}
        >
          {runningHead}
        </div>
      )}
      {children}
      {number !== undefined && !hard && <div className="folio">{number}</div>}
    </div>
  );
});

const nome = recipientName.trim() || "você";
const titulo = "Memórias Amarelas";
const autor = authorName.trim();

/* ---------------- CAPA ---------------- */
function CoverInner() {
  return (
    <div className="relative h-full w-full">
      <div className="spine left-0">
        <span className="spine-text">
          {titulo} {autor ? `· ${autor}` : ""}
        </span>
      </div>

      <div className="absolute left-[6cqw] right-0 top-0 bottom-0 px-[8cqw] pt-[8cqw] pb-[7cqw] flex flex-col">
        {/* nome do autor, bem grande, como nas edições de editora */}
        <p className="cover-author">{autor || "um livro de quem carregou sua bolsa pra lá e pra cá"}</p>
        <div className="rule mt-[2.5cqw]" />

        {/* ilustração */}
        <div className="relative my-auto">
          <CoverCat className="mx-auto w-[66cqw]" />
          <div className="absolute -right-[2cqw] top-[2cqw] flex h-[22cqw] w-[22cqw] rotate-[12deg] items-center justify-center rounded-full bg-[#141210] text-center text-[#e9b92e] shadow-[0_3px_0_rgba(0,0,0,.25)]">
            <span className="cover-badge px-[1.5cqw]">
              1 exemplar
              <br />
              vendido
              <br />
              (pra você)
            </span>
          </div>
        </div>

        {/* título */}
        <h1 className="cover-title-flat">
          Memórias
          <br />
          Amarelas
        </h1>
        <p className="cover-tag mt-[2.5cqw]">
          Dedicatória de um amante silencioso
        </p>
      </div>
    </div>
  );
}

/** Capa estática (sem o livro), usada na tela de countdown. */
export function CoverPreview() {
  return (
    <div className="sheet cover-flat board relative w-full overflow-hidden" style={{ aspectRatio: "420 / 600" }}>
      <CoverInner />
    </div>
  );
}

/* ---------------- DEDICATÓRIA ---------------- */
function DedicationInner() {
  return (
    <div className="sheet-pad relative flex h-full w-full flex-col items-center justify-center text-center">
      <p className="chapter-label">para</p>
      <h2
        className="mt-[2cqw] text-verde"
        style={{ fontFamily: "var(--font-body)", fontSize: "clamp(30px, 11cqw, 52px)", lineHeight: 1 }}
      >
        {nome}
      </h2>
      <div className="rule my-[4cqw]" />
      <div className="body-text !text-center italic !text-ink-soft max-w-[86%]">
        <p>
          Sinto saudade. Das conversas do bom dia ao boa noite, da sua risada,
          do seu jeito de enxergar o mundo.
        </p>
        <p className="!indent-0">
          Se eu precisasse conjurar um Expecto Patronum, a lembrança mais feliz
          que eu escolheria seria uma com você. Então este livro é o meu
          patrono: feito de memórias amarelas, pra espantar qualquer dementador
          que aparecer no seu caminho.
        </p>
        <p className="!indent-0">E ele teria forma de gato, claro.</p>
      </div>
      <div className="patronus mt-[4cqw] w-[20cqw]">
        <DoodleArt name="cat" className="w-full" />
      </div>
      <p className="pencil mt-[3cqw] rotate-[-3deg]">pode folhear devagar</p>
    </div>
  );
}

/* ---------------- SUMÁRIO ---------------- */
function ContentsRow({ label, title, n }: { label: string; title: string; n: number }) {
  return (
    <li className="flex items-baseline gap-[2cqw] body-text !text-left">
      <span
        className="w-[8cqw] shrink-0 text-[#141210]"
        style={{ fontFamily: "var(--font-display)", letterSpacing: "0.04em" }}
      >
        {label}
      </span>
      <span className="shrink-0">{title}</span>
      <span className="flex-1 border-b border-dotted border-ink/40 translate-y-[-0.3em]" />
      <span className="shrink-0 tabular-nums">{n}</span>
    </li>
  );
}

function ContentsInner() {
  const chapters = pages.filter(
    (p): p is ChapterPage => p.kind === "chapter" && p.chapter !== undefined,
  );
  const firstPageOf = (ch: number) =>
    pages.findIndex((p) => p.kind === "chapter" && p.chapter === ch) - 2;
  const playlistPage = pages.findIndex((p) => p.kind === "playlist") - 2;
  const listPage = pages.findIndex((p) => p.kind === "list") - 2;

  return (
    <div className="sheet-pad relative flex h-full w-full flex-col">
      <p className="chapter-title-sans mt-[4cqw]">Sumário</p>
      <div className="rule mt-[2cqw] mb-[5cqw]" />
      <ol className="space-y-[2.2cqw]">
        {chapters.map((c) => (
          <ContentsRow
            key={c.chapter}
            label={String(c.chapter!)}
            title={c.title!}
            n={firstPageOf(c.chapter!)}
          />
        ))}
        <ContentsRow label="♪" title="Uma playlist pra você" n={playlistPage} />
        <ContentsRow label="∞" title="Coisas que lembram você" n={listPage} />
      </ol>
    </div>
  );
}

/* ---------------- CAPÍTULO ---------------- */
function ChapterHeader({ num, title }: { num: string; title: string }) {
  return (
    <header className="mb-[4cqw] mt-[2cqw] flex items-end gap-[3cqw]">
      <span className="chapter-num">{num}</span>
      <div className="pb-[1cqw]">
        <div className="rule mb-[1.5cqw]" />
        <h2 className="chapter-title-sans">{title}</h2>
      </div>
    </header>
  );
}

function ChapterInner({ page, side }: { page: ChapterPage; side: "left" | "right" }) {
  const hasHeader = page.chapter !== undefined;
  const doodleOnRight = side === "left";
  return (
    <div className="sheet-pad relative flex h-full w-full flex-col">
      {hasHeader ? (
        <ChapterHeader num={String(page.chapter)} title={page.title ?? ""} />
      ) : (
        <div className="mt-[6cqw]" />
      )}

      <div className="body-text relative flex-1">
        {page.doodle && (
          <div
            className={`${doodleOnRight ? "float-right ml-[3cqw]" : "float-left mr-[3cqw]"} polaroid-w mb-[1cqw] mt-[1cqw]`}
          >
            <Polaroid
              caption={page.caption}
              rotate={doodleOnRight ? 3 : -3}
              tape={doodleOnRight ? "pink" : ""}
            >
              <DoodleArt name={page.doodle} className="w-full h-full p-[6%]" />
            </Polaroid>
          </div>
        )}
        {page.paragraphs.map((p, i) => (
          <p key={i}>
            {i === 0 && hasHeader ? (
              <>
                <span className="dropcap">{p.charAt(0)}</span>
                {p.slice(1)}
              </>
            ) : (
              p
            )}
          </p>
        ))}
        {page.note && (
          <p
            className={`pencil mt-[4cqw] ${doodleOnRight ? "text-left rotate-[-2deg]" : "text-right rotate-[2deg]"} clear-both`}
          >
            — {page.note}
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------------- PLAYLIST ---------------- */
function toEmbed(url: string) {
  const m = url.match(/open\.spotify\.com\/(playlist|album|track)\/([A-Za-z0-9]+)/);
  if (!m) return "";
  return `https://open.spotify.com/embed/${m[1]}/${m[2]}?utm_source=generator&theme=0`;
}

function PlaylistInner() {
  const embed = toEmbed(playlistUrl);
  return (
    <div className="sheet-pad relative flex h-full w-full flex-col">
      <ChapterHeader num="♪" title="Uma playlist pra você" />
      <p className="body-text italic !text-ink-soft !text-left">
        Montei essa pra você, música por música. Dá o play e continua lendo.
      </p>

      {embed ? (
        <div className="relative mt-[4cqw] rotate-[-1deg] shadow-[0_8px_18px_rgba(0,0,0,.25)]">
          <Tape className="-top-3 left-6 rotate-[-10deg]" color="green" />
          <Tape className="-top-3 right-6 rotate-[12deg]" color="pink" />
          <iframe
            title="Playlist do Spotify"
            src={embed}
            width="100%"
            height="352"
            style={{ borderRadius: 12, border: 0, display: "block" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>
      ) : (
        <div className="mt-[2cqw] flex flex-1 flex-col items-center justify-center">
          <div className="w-[44cqw] wiggle">
            <Polaroid caption="feita pra você ♪" rotate={0} tape="green">
              <DoodleArt name="vinyl" className="w-full h-full p-[4%]" />
            </Polaroid>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- LISTA ---------------- */
const destaques = new Set([
  "Loki",
  "Late Night Talking",
  "a cor verde",
  "a Pandora",
  "flor de guardanapo",
  "anel de Bis",
  "cinnamon rolls",
  "chá de bolinha",
  "Dias Perfeitos",
  "Gilmore Girls",
  "vinil",
  "meia de sapinho",
  "Raphael Montes",
]);

function ListInner({ title, items }: { title?: string; items: string[] }) {
  return (
    <div className="sheet-pad relative flex h-full w-full flex-col">
      {title ? (
        <header className="mb-[4cqw] mt-[2cqw]">
          <span className="chapter-num">∞</span>
          <div className="rule my-[1.5cqw]" />
          <h2 className="chapter-title-sans">{title}</h2>
        </header>
      ) : (
        <div className="mt-[6cqw]" />
      )}
      <p className="body-text !text-left" style={{ lineHeight: 1.85 }}>
        {items.map((it, i) => (
          <span key={it}>
            {destaques.has(it) ? <mark className="highlight bg-transparent text-ink">{it}</mark> : it}
            {i < items.length - 1 && <span className="text-terracota"> · </span>}
          </span>
        ))}
        {!title && <span className="text-terracota"> · e mais ∞</span>}
      </p>
    </div>
  );
}

/* ---------------- CONTRACAPA ---------------- */
function BackInner() {
  return (
    <div className="relative h-full w-full">
      <div className="spine right-0">
        <span className="spine-text">{titulo}</span>
      </div>

      <div className="absolute left-0 right-[6cqw] top-0 bottom-0 px-[8cqw] pt-[8cqw] pb-[7cqw] flex flex-col">
        <p className="cover-author">Feliz {age} anos,<br />{nome}</p>
        <div className="rule mt-[2.5cqw] mb-[5cqw]" />

        <div className="blurb space-y-[2.5cqw]">
          <p>
            Tudo começa com uma gata chamada Pandora. Depois vêm uma pizza, uma
            flor de guardanapo, um anel de Bis, um ônibus cheio de musga e o
            melhor Loki que o mundo já viu.
          </p>
          <p>
            Entre um cinnamon roll e um chá de bolinha, alguém descobre que
            certos dias viram memórias amarelas, daquelas que a gente guarda pra
            sempre.
          </p>
          <p className="italic">
            Um livro curto, feito à mão, pra ler no dia {birthday}, o
            dia em que {nome} faz {age} anos.
          </p>
        </div>

        <div className="mt-[5cqw] space-y-[1.5cqw] cover-tag">
          <p>“O melhor Loki que eu já vi.” — Edson</p>
          <p>“Miau.” — Pandora</p>
        </div>

        <div className="mt-auto flex items-end justify-between gap-[3cqw]">
          <p className="cover-badge max-w-[40cqw] opacity-80">
            edição especial de aniversário · exemplar único · não vende, não
            troca, não devolve
          </p>
          <Barcode className="w-[30cqw] shrink-0" />
        </div>
      </div>
    </div>
  );
}

/* ---------------- fábrica ---------------- */
function chapterTitleFor(index: number) {
  for (let i = index; i >= 0; i--) {
    const p = pages[i];
    if (p.kind === "chapter" && p.title) return p.title;
    if (p.kind !== "chapter") break;
  }
  return undefined;
}

export function renderPage(page: Page, index: number) {
  const side: "left" | "right" = index % 2 === 0 ? "right" : "left";
  const number = index >= 3 && index < pages.length - 1 ? index - 2 : undefined;

  switch (page.kind) {
    case "cover":
      return (
        <Sheet key={index} side={side} hard>
          <CoverInner />
        </Sheet>
      );
    case "back":
      return (
        <Sheet key={index} side={side} hard>
          <BackInner />
        </Sheet>
      );
    case "dedication":
      return (
        <Sheet key={index} side={side}>
          <DedicationInner />
        </Sheet>
      );
    case "contents":
      return (
        <Sheet key={index} side={side}>
          <ContentsInner />
        </Sheet>
      );
    case "playlist":
      return (
        <Sheet key={index} side={side} number={number} runningHead={titulo}>
          <PlaylistInner />
        </Sheet>
      );
    case "list":
      return (
        <Sheet key={index} side={side} number={number} runningHead={titulo}>
          <ListInner title={page.title} items={page.items} />
        </Sheet>
      );
    case "chapter": {
      const head = side === "left" ? titulo : chapterTitleFor(index) ?? titulo;
      return (
        <Sheet key={index} side={side} number={number} runningHead={head}>
          <ChapterInner page={page} side={side} />
        </Sheet>
      );
    }
  }
}
