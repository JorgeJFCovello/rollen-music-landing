import type { CSSProperties } from "react";

type SvgProps = { className?: string; style?: CSSProperties };

/** Gothic window tracery — nested pointed arches and a rose piercing, in the manner of a cathedral bay. */
export function Tracery({ className }: SvgProps) {
  return (
    <svg
      viewBox="0 0 320 720"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <path
        d="M20 720 L20 220 C20 120 84 30 160 10 C236 30 300 120 300 220 L300 720"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M60 720 L60 240 C60 150 104 70 160 46 C216 70 260 150 260 240 L260 720"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.7"
      />
      <path d="M20 420 L300 420" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <path d="M20 560 L300 560" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      {[100, 160, 220].map((x) => (
        <path key={x} d={`M${x} 720 L${x} 90`} stroke="currentColor" strokeWidth="0.8" opacity="0.35" />
      ))}
      <circle cx="160" cy="150" r="46" stroke="currentColor" strokeWidth="1.4" opacity="0.75" />
      <circle cx="160" cy="150" r="16" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      {[0, 60, 120, 180, 240, 300].map((deg) => (
        <line
          key={deg}
          x1="160"
          y1="150"
          x2={160 + 46 * Math.cos((deg * Math.PI) / 180)}
          y2={150 + 46 * Math.sin((deg * Math.PI) / 180)}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.5"
        />
      ))}
    </svg>
  );
}

/** A small quatrefoil finial, used as a section divider. */
export function Quatrefoil({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
      {[
        [30, 14],
        [46, 30],
        [30, 46],
        [14, 30],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="11" stroke="currentColor" strokeWidth="1.1" opacity="0.75" />
      ))}
      <circle cx="30" cy="30" r="5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
    </svg>
  );
}

/** A slender carved stone mullion, tying a panel to the element below it. */
export function Mullion({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 20 120" className={className} aria-hidden="true" preserveAspectRatio="none">
      <rect x="8" y="0" width="4" height="120" fill="currentColor" opacity="0.4" />
      <circle cx="10" cy="16" r="3.5" fill="currentColor" opacity="0.55" />
      <circle cx="10" cy="60" r="3.5" fill="currentColor" opacity="0.4" />
      <circle cx="10" cy="104" r="3.5" fill="currentColor" opacity="0.55" />
    </svg>
  );
}

/**
 * A single flat cat silhouette — the recurring motif, restrained and graphic,
 * carried in stone tone rather than illustrated or lit as a separate device.
 */
export function CatSilhouette({ className, style }: SvgProps) {
  return (
    <svg viewBox="0 0 120 130" className={className} style={style} aria-hidden="true">
      <path
        fill="currentColor"
        d="
          M30 118 C25 95 27 75 42 66 L78 66 C93 75 95 95 90 118 C90 125 76 128 60 128 C44 128 30 125 30 118 Z
          M36 50 a24 24 0 1 0 48 0 a24 24 0 1 0 -48 0 Z
          M44 34 L34 8 L60 30 Z
          M76 34 L86 8 L60 30 Z
          M88 112 C110 108 118 86 106 64 C100 54 88 60 92 70 C100 86 94 100 78 104 C70 106 72 116 88 112 Z
        "
      />
    </svg>
  );
}
