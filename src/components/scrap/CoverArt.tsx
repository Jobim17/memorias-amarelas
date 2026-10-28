/* Ilustração flat da capa: gato preto sentado, olhando uma memória amarela.
   Estilo chapado, sem contorno, com um toque de verde. */
export function CoverCat({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      {/* sombra no chão */}
      <ellipse cx="100" cy="178" rx="70" ry="7" fill="#141210" opacity="0.18" />
      {/* rabo */}
      <path
        d="M138 160 c30 4 44 -14 38 -34 c-4 -12 -18 -14 -22 -4 c-3 8 8 12 10 4"
        fill="none"
        stroke="#141210"
        strokeWidth="11"
        strokeLinecap="round"
      />
      {/* corpo */}
      <path d="M58 176 c-10 -50 10 -92 44 -92 c34 0 54 42 44 92 z" fill="#141210" />
      {/* cabeça */}
      <path d="M62 76 l6 -40 l26 22 h12 l26 -22 l6 40 c0 24 -18 38 -38 38 c-20 0 -38 -14 -38 -38 z" fill="#141210" />
      {/* orelhas internas */}
      <path d="M72 70 l3 -20 l13 11 z" fill="#2f5d3a" />
      <path d="M128 70 l-3 -20 l-13 11 z" fill="#2f5d3a" />
      {/* olhos */}
      <ellipse cx="86" cy="86" rx="6" ry="7" fill="#e9b92e" />
      <ellipse cx="114" cy="86" rx="6" ry="7" fill="#e9b92e" />
      <ellipse cx="86" cy="87" rx="2" ry="5" fill="#141210" />
      <ellipse cx="114" cy="87" rx="2" ry="5" fill="#141210" />
      {/* coleira verde */}
      <path d="M72 108 c10 10 46 10 56 0 l0 8 c-10 10 -46 10 -56 0 z" fill="#2f5d3a" />
      <circle cx="100" cy="120" r="4" fill="#e9b92e" />
      {/* memória amarela flutuando */}
      <circle cx="152" cy="52" r="16" fill="#fff4c2" />
      <circle cx="152" cy="52" r="16" fill="none" stroke="#141210" strokeWidth="2.5" />
      <circle cx="146" cy="46" r="4" fill="#ffffff" />
      {/* patinhas */}
      <ellipse cx="80" cy="176" rx="12" ry="5" fill="#141210" />
      <ellipse cx="120" cy="176" rx="12" ry="5" fill="#141210" />
    </svg>
  );
}

export function Barcode({ className = "" }: { className?: string }) {
  const bars = [3, 1, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 1, 2, 3, 1, 2, 1, 1, 3, 1, 2, 1, 2];
  let x = 0;
  return (
    <svg viewBox="0 0 100 40" className={className} aria-hidden>
      <rect width="100" height="40" fill="#fbf5e6" />
      {bars.map((w, i) => {
        const el = <rect key={i} x={x + 6} y="4" width={w} height={i % 7 === 0 ? 30 : 26} fill="#141210" />;
        x += w + 1;
        return el;
      })}
      <text x="50" y="37" textAnchor="middle" fontSize="6" fontFamily="var(--font-ui)" fill="#141210">
        9 782711 202501
      </text>
    </svg>
  );
}
