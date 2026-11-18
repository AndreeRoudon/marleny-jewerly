import { useId } from "react";

const LEAF = "M0 0C3-3.6 9-3.6 12.5 0 9 3.6 3 3.6 0 0Z";

function Sprig() {
  return (
    <g>
      <path
        d="M41 61C29 58 15 45 10 21"
        fill="none"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path d="M26 51C22 44 23 38 27 34" fill="none" strokeWidth="1" strokeLinecap="round" />
      <g stroke="none">
        <path d={LEAF} transform="translate(35 59) rotate(-158)" />
        <path d={LEAF} transform="translate(35 59) rotate(118) scale(.8)" />
        <path d={LEAF} transform="translate(26 51) rotate(-172)" />
        <path d={LEAF} transform="translate(19 42) rotate(-178)" />
        <path d={LEAF} transform="translate(19 42) rotate(-58) scale(.85)" />
        <path d={LEAF} transform="translate(13.5 31) rotate(168) scale(.9)" />
        <path d={LEAF} transform="translate(13.5 31) rotate(-48) scale(.8)" />
        {/* flor superior */}
        <g transform="translate(9.5 16)">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="0" cy="-3.6" rx="2.1" ry="3" transform={`rotate(${a})`} />
          ))}
        </g>
        {/* flor lateral */}
        <g transform="translate(28.5 31.5) scale(.72)">
          {[0, 72, 144, 216, 288].map((a) => (
            <ellipse key={a} cx="0" cy="-3.6" rx="2.1" ry="3" transform={`rotate(${a})`} />
          ))}
        </g>
        <circle cx="4.5" cy="27" r="1.3" />
        <circle cx="20" cy="24" r="1.1" />
      </g>
      <circle cx="9.5" cy="16" r="1.2" fill="#0c0908" stroke="none" />
      <circle cx="28.5" cy="31.5" r="0.9" fill="#0c0908" stroke="none" />
    </g>
  );
}

/** Emblema: M coronada con ramas florales a cada lado (inspirado en el letrero). */
export function Logo({ className }: { className?: string }) {
  const id = useId();
  const paint = `url(#${id})`;
  return (
    <svg viewBox="0 0 140 76" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3deaa" />
          <stop offset="0.5" stopColor="#d6ac55" />
          <stop offset="1" stopColor="#a87a2c" />
        </linearGradient>
      </defs>
      <g fill={paint} stroke={paint}>
        <Sprig />
        <g transform="translate(140 0) scale(-1 1)">
          <Sprig />
        </g>
        {/* corona */}
        <g stroke="none">
          <path d="M60 17 58 7l5 4.5L70 4l7 7.5L82 7l-2 10Z" />
          <rect x="60" y="18.4" width="20" height="2" rx="1" />
          <circle cx="58" cy="6" r="1.4" />
          <circle cx="70" cy="2.8" r="1.6" />
          <circle cx="82" cy="6" r="1.4" />
        </g>
        <text
          x="70"
          y="64"
          textAnchor="middle"
          stroke="none"
          fontSize="54"
          fontWeight="600"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          M
        </text>
      </g>
    </svg>
  );
}
