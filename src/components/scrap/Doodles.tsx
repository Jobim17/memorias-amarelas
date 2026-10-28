import type { Doodle } from "@/content/book";

/* Rabiscos à mão (caneta marrom, traço tremido). */

const stroke = {

  stroke: "#3b2a1a",
  strokeWidth: 2.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const Y = "#e3b23c";
const P = "#e4708f";
const G = "#7fa26b";
const T = "#c8552c";
const B = "#3f7fa6";

function Cat() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <path d="M22 60 c-6 -22 8 -40 28 -40 c20 0 34 18 28 40" {...stroke} />
      <path d="M26 30 l-4 -16 l14 10" {...stroke} />
      <path d="M74 30 l4 -16 l-14 10" {...stroke} />
      <path d="M22 60 c-4 14 2 26 28 26 c26 0 32 -12 28 -26" {...stroke} />
      <path d="M50 86 c10 0 20 -4 30 2 c6 4 4 10 -2 8" {...stroke} />
      <circle cx="40" cy="48" r="2.4" fill="#3b2a1a" />
      <circle cx="60" cy="48" r="2.4" fill="#3b2a1a" />
      <path d="M47 56 h6 l-3 3 z" fill={P} stroke={P} />
      <path d="M50 59 c0 4 -4 5 -6 3 M50 59 c0 4 4 5 6 3" {...stroke} strokeWidth={1.8} />
      <path d="M20 54 l-12 -2 M20 58 l-12 2 M80 54 l12 -2 M80 58 l12 2" {...stroke} strokeWidth={1.6} />
      <path d="M30 20 l-6 -8 M70 20 l6 -8" {...stroke} strokeWidth={1.4} opacity=".5" />
    </svg>
  );
}

function Pizza() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <path d="M50 90 L14 22 Q50 6 86 22 Z" fill="#f3d58a" {...stroke} />
      <path d="M14 22 Q50 6 86 22 L82 30 Q50 16 18 30 Z" fill={T} {...stroke} />
      <circle cx="42" cy="44" r="6" fill={T} {...stroke} strokeWidth={1.6} />
      <circle cx="60" cy="52" r="6" fill={T} {...stroke} strokeWidth={1.6} />
      <circle cx="50" cy="68" r="5" fill={T} {...stroke} strokeWidth={1.6} />
      <path d="M34 60 l6 2 M62 36 l-4 4" {...stroke} strokeWidth={1.6} />
    </svg>
  );
}

function Flower() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <path d="M50 92 C 48 70 52 60 50 50" {...stroke} stroke="#4f7a3a" />
      <path d="M50 70 c-10 -2 -16 -10 -18 -18 c8 2 16 8 18 18" fill={G} {...stroke} stroke="#4f7a3a" strokeWidth={1.8} />
      {[0, 60, 120, 180, 240, 300].map((a) => (
        <ellipse
          key={a}
          cx="50"
          cy="32"
          rx="9"
          ry="16"
          fill="#fbf5e6"
          {...stroke}
          strokeWidth={1.8}
          transform={`rotate(${a} 50 48)`}
        />
      ))}
      <circle cx="50" cy="48" r="7" fill={Y} {...stroke} strokeWidth={1.8} />
      {/* anel de Bis */}
      <circle cx="80" cy="80" r="10" {...stroke} stroke={T} strokeWidth={4} />
      <rect x="74" y="64" width="12" height="7" fill={Y} {...stroke} strokeWidth={1.4} />
      <text x="76" y="70" fontSize="5" fontFamily="var(--font-ui)" fill="#3b2a1a">BIS</text>
    </svg>
  );
}

function Cinnamon() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <path d="M50 50 m-30 0 a30 30 0 1 1 60 0 a30 30 0 1 1 -60 0" fill="#e9b96b" {...stroke} />
      <path d="M50 50 c2 -14 -14 -20 -20 -8 c-6 12 8 24 20 18 c14 -6 10 -26 -2 -26 c-14 0 -18 18 -6 22" {...stroke} stroke="#8a4b1f" strokeWidth={2.2} />
      <path d="M26 34 c10 -6 20 -4 26 2 c8 -8 20 -6 24 2" {...stroke} stroke="#fff8e6" strokeWidth={3.2} />
      <path d="M22 44 c6 10 2 16 8 22 M78 44 c-6 10 -2 16 -8 22" {...stroke} stroke="#fff8e6" strokeWidth={3} />
      <path d="M40 14 q2 -6 0 -10 M52 12 q2 -6 0 -10 M64 14 q2 -6 0 -10" {...stroke} strokeWidth={1.4} opacity=".5" />
    </svg>
  );
}

function Bus() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <rect x="10" y="30" width="80" height="42" rx="6" fill={Y} {...stroke} />
      <rect x="16" y="36" width="14" height="14" fill="#cfe6f2" {...stroke} strokeWidth={1.8} />
      <rect x="36" y="36" width="14" height="14" fill="#cfe6f2" {...stroke} strokeWidth={1.8} />
      <rect x="56" y="36" width="14" height="14" fill="#cfe6f2" {...stroke} strokeWidth={1.8} />
      <rect x="74" y="36" width="10" height="26" fill="#cfe6f2" {...stroke} strokeWidth={1.8} />
      <circle cx="28" cy="74" r="7" fill="#3b2a1a" />
      <circle cx="72" cy="74" r="7" fill="#3b2a1a" />
      <path d="M10 58 h64" {...stroke} strokeWidth={1.6} />
      <path d="M6 80 h8 M14 86 h10 M84 82 h10" {...stroke} strokeWidth={1.6} opacity=".6" />
      <path d="M40 20 q4 -6 2 -10 M48 18 q4 -6 2 -10" {...stroke} strokeWidth={1.4} />
      <text x="54" y="22" fontSize="9" fontFamily="var(--font-body)" fill="#3b2a1a">♪ ♫</text>
    </svg>
  );
}

function Headphones() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <path d="M22 62 V50 a28 28 0 0 1 56 0 v12" {...stroke} strokeWidth={3} />
      <rect x="14" y="56" width="14" height="24" rx="5" fill={P} {...stroke} />
      <rect x="72" y="56" width="14" height="24" rx="5" fill={P} {...stroke} />
      <text x="36" y="48" fontSize="14" fontFamily="var(--font-body)" fill="#3b2a1a">♪</text>
      <text x="52" y="40" fontSize="12" fontFamily="var(--font-body)" fill="#3b2a1a">♫</text>
    </svg>
  );
}

function Loki() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {/* elmo com chifres */}
      <path d="M30 60 q20 -14 40 0 v10 h-40 z" fill={Y} {...stroke} />
      <path d="M34 54 C 18 44 10 26 18 8 C 24 26 30 36 40 50" fill={Y} {...stroke} />
      <path d="M66 54 C 82 44 90 26 82 8 C 76 26 70 36 60 50" fill={Y} {...stroke} />
      <path d="M22 70 h56" {...stroke} stroke="#2f5d3a" strokeWidth={6} />
      <circle cx="50" cy="64" r="3" fill="#2f5d3a" />
      <text x="24" y="92" fontSize="11" fontFamily="var(--font-ui)" fill="#2f5d3a">1º lugar*</text>
    </svg>
  );
}

function BubbleTea() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <path d="M30 24 h40 l-4 62 h-32 z" fill="#f6e4b8" {...stroke} />
      <path d="M26 24 h48" {...stroke} />
      <path d="M58 86 L72 8" {...stroke} stroke={P} strokeWidth={4} />
      <path d="M32 46 h36" {...stroke} stroke="#d6b27a" strokeWidth={1.8} />
      {[38, 48, 58, 43, 53, 36, 60].map((x, i) => (
        <circle key={i} cx={x} cy={i < 3 ? 78 : i < 5 ? 70 : 74} r="4" fill="#3b2a1a" />
      ))}
      <circle cx="80" cy="40" r="5" fill={B} opacity=".9" />
      <circle cx="88" cy="48" r="4" fill={B} opacity=".9" />
      <circle cx="20" cy="60" r="4" fill={B} opacity=".9" />
    </svg>
  );
}

function Orbs() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      {[
        [30, 40, 16],
        [62, 32, 12],
        [56, 66, 18],
        [26, 74, 10],
        [82, 60, 8],
      ].map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={r} fill={Y} {...stroke} strokeWidth={2} />
          <circle cx={x - r / 3} cy={y - r / 3} r={r / 4} fill="#fff6c7" />
        </g>
      ))}
      <text x="10" y="18" fontSize="9" fontFamily="var(--font-body)" fill="#3b2a1a">memórias amarelas</text>
    </svg>
  );
}

function Coffee() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <path d="M22 40 h48 v26 a14 14 0 0 1 -14 14 h-20 a14 14 0 0 1 -14 -14 z" fill="#fbf5e6" {...stroke} />
      <path d="M70 46 h8 a9 9 0 0 1 0 18 h-8" {...stroke} />
      <path d="M26 46 h40" {...stroke} stroke="#6b3e1d" strokeWidth={6} />
      <path d="M36 30 q4 -6 0 -12 M46 28 q4 -6 0 -12 M56 30 q4 -6 0 -12" {...stroke} strokeWidth={1.6} opacity=".6" />
      <path d="M18 86 h64" {...stroke} strokeWidth={1.6} />
      <text x="24" y="94" fontSize="8" fontFamily="var(--font-body)" fill="#3b2a1a">sem açúcar</text>
    </svg>
  );
}

function Books() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <rect x="18" y="62" width="60" height="12" fill={G} {...stroke} transform="rotate(-3 48 68)" />
      <rect x="22" y="50" width="56" height="12" fill={T} {...stroke} transform="rotate(2 50 56)" />
      <rect x="20" y="38" width="52" height="12" fill={B} {...stroke} transform="rotate(-2 46 44)" />
      <rect x="26" y="26" width="46" height="12" fill={Y} {...stroke} transform="rotate(3 49 32)" />
      <path d="M20 80 h64" {...stroke} strokeWidth={1.6} />
      {/* gatinho em cima */}
      <path d="M66 24 c-2 -8 4 -12 8 -12 c4 0 10 4 8 12" {...stroke} strokeWidth={1.8} />
      <path d="M67 16 l-1 -5 l5 3 M81 16 l1 -5 l-5 3" {...stroke} strokeWidth={1.6} />
      <circle cx="71" cy="18" r="1" fill="#3b2a1a" />
      <circle cx="77" cy="18" r="1" fill="#3b2a1a" />
    </svg>
  );
}

function Vinyl() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <circle cx="50" cy="50" r="40" fill="#2b2219" {...stroke} />
      <circle cx="50" cy="50" r="30" {...stroke} stroke="#6a5a4a" strokeWidth={1} />
      <circle cx="50" cy="50" r="22" {...stroke} stroke="#6a5a4a" strokeWidth={1} />
      <circle cx="50" cy="50" r="13" fill={Y} {...stroke} strokeWidth={1.8} />
      <circle cx="50" cy="50" r="2.5" fill="#2b2219" />
      <text x="40" y="48" fontSize="5" fontFamily="var(--font-ui)" fill="#3b2a1a">LATE</text>
      <text x="38" y="56" fontSize="5" fontFamily="var(--font-ui)" fill="#3b2a1a">NIGHT</text>
    </svg>
  );
}

function Gift() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <rect x="20" y="42" width="60" height="44" fill={P} {...stroke} />
      <rect x="16" y="32" width="68" height="12" fill={P} {...stroke} />
      <path d="M50 32 v54" {...stroke} stroke={Y} strokeWidth={6} />
      <path d="M16 38 h68" {...stroke} stroke={Y} strokeWidth={6} />
      <path d="M50 32 c-14 -2 -20 -14 -10 -16 c8 -2 10 10 10 16 c0 -6 2 -18 10 -16 c10 2 4 14 -10 16" fill={Y} {...stroke} />
      <path d="M14 22 l-4 -6 M86 22 l4 -6 M50 10 v-6" {...stroke} strokeWidth={1.6} opacity=".6" />
    </svg>
  );
}

function Heart() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
      <path d="M50 84 C 20 64 10 46 18 32 C 26 18 44 22 50 36 C 56 22 74 18 82 32 C 90 46 80 64 50 84 Z" fill={T} {...stroke} />
      <path d="M28 36 c4 -6 10 -8 14 -6" {...stroke} stroke="#fff" strokeWidth={2} opacity=".7" />
      <path d="M12 20 l-4 -4 M88 20 l4 -4 M50 14 v-6" {...stroke} strokeWidth={1.6} opacity=".6" />
    </svg>
  );
}

const map: Record<Doodle, () => React.JSX.Element> = {
  cat: Cat,
  pizza: Pizza,
  flower: Flower,
  ring: Flower,
  cinnamon: Cinnamon,
  bus: Bus,
  headphones: Headphones,
  loki: Loki,
  bubbletea: BubbleTea,
  orbs: Orbs,
  coffee: Coffee,
  books: Books,
  vinyl: Vinyl,
  gift: Gift,
  heart: Heart,
};

export function DoodleArt({ name, className = "" }: { name: Doodle; className?: string }) {
  const C = map[name];
  return (
    <div className={className} aria-hidden>
      <C />
    </div>
  );
}
