import type { CSSProperties, ReactNode } from "react";

/* Pedacinhos de scrapbook: fita, polaroid, adesivo, bilhete, papel picado. */

export function Tape({
  className = "",
  color = "",
  style,
}: {
  className?: string;
  color?: "" | "pink" | "green" | "blue";
  style?: CSSProperties;
}) {
  return (
    <span
      className={`tape ${color ? `tape-${color}` : ""} ${className}`}
      style={style}
      aria-hidden
    />
  );
}

export function Polaroid({
  children,
  caption,
  rotate = -3,
  className = "",
  tape = "",
}: {
  children: ReactNode;
  caption?: string;
  rotate?: number;
  className?: string;
  tape?: "" | "pink" | "green" | "blue";
}) {
  return (
    <figure
      className={`relative inline-block bg-[#fffdf7] p-2 pb-1 shadow-[0_6px_14px_rgba(40,25,10,.28)] ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <Tape color={tape} className="-top-3 left-1/2 -translate-x-1/2 rotate-[-4deg]" />
      <div className="aspect-square w-full bg-[#efe6d2] overflow-hidden flex items-center justify-center">
        {children}
      </div>
      {caption && (
        <figcaption className="polaroid-caption mt-1 text-center text-ink-soft">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

export function Sticker({
  children,
  color = "var(--mustard)",
  fg = "var(--ink)",
  rotate = 6,
  className = "",
}: {
  children: ReactNode;
  color?: string;
  fg?: string;
  rotate?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-sm font-bold uppercase tracking-wide shadow-[0_2px_4px_rgba(0,0,0,.2)] ${className}`}
      style={{
        background: color,
        color: fg,
        transform: `rotate(${rotate}deg)`,
        fontFamily: "var(--font-ui)",
        border: "2px dashed rgba(255,255,255,.55)",
        outline: `3px solid ${color}`,
      }}
    >
      {children}
    </span>
  );
}

export function Note({
  children,
  rotate = -4,
  className = "",
  color = "#fff5a8",
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
  color?: string;
}) {
  return (
    <span
      className={`inline-block px-3 py-2 shadow-[2px_3px_8px_rgba(0,0,0,.18)] ${className}`}
      style={{
        background: color,
        transform: `rotate(${rotate}deg)`,
        fontFamily: "var(--font-body)",
        fontSize: "1.15rem",
        lineHeight: 1.1,
        color: "var(--ink)",
      }}
    >
      {children}
    </span>
  );
}

/* Papel picado: bandeirinhas com furinhos, penduradas num barbante. */
export function PapelPicado({ className = "" }: { className?: string }) {
  const colors = [
    "var(--pink)",
    "var(--mustard)",
    "var(--green-light)",
    "var(--blue)",
    "var(--terracotta)",
    "var(--pink)",
    "var(--mustard)",
  ];
  return (
    <svg
      viewBox="0 0 420 70"
      className={`w-full ${className}`}
      aria-hidden
      preserveAspectRatio="none"
    >
      <defs>
        <mask id="pp-holes">
          <rect width="420" height="70" fill="white" />
          {colors.map((_, i) => {
            const x = 8 + i * 58;
            return (
              <g key={i}>
                <circle cx={x + 25} cy="26" r="6" fill="black" />
                <circle cx={x + 13} cy="18" r="3" fill="black" />
                <circle cx={x + 37} cy="18" r="3" fill="black" />
                <circle cx={x + 13} cy="36" r="3" fill="black" />
                <circle cx={x + 37} cy="36" r="3" fill="black" />
                <path d={`M${x + 25} 40 l4 6 l-4 6 l-4 -6 z`} fill="black" />
              </g>
            );
          })}
        </mask>
      </defs>
      <path d="M0 4 Q 210 14 420 4" stroke="#5a4a3a" strokeWidth="1.5" fill="none" />
      <g mask="url(#pp-holes)">
        {colors.map((c, i) => {
          const x = 8 + i * 58;
          return (
            <path
              key={i}
              d={`M${x} 6 h50 v48 l-5 6 l-5 -6 l-5 6 l-5 -6 l-5 6 l-5 -6 l-5 6 l-5 -6 l-5 6 l-5 -6 z`}
              fill={c}
              opacity="0.92"
            />
          );
        })}
      </g>
    </svg>
  );
}

export function Textile({ className = "" }: { className?: string }) {
  return <div className={`textile ${className}`} aria-hidden />;
}
