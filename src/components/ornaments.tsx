import type { CSSProperties } from "react";

type SvgProps = { className?: string; style?: CSSProperties };

/**
 * An irregular watercolor-style coffee stain: a mottled, feathered blot with a darker
 * off-center core, a dripping bottom edge, and a few scattered splatter dots. The one
 * deliberately warm-toned mark in an otherwise monochrome system, per explicit request.
 * `id` must be unique per instance — it seeds the local filter defs.
 */
export function CoffeeStain({ id, className, style }: SvgProps & { id: string }) {
  const bleed = `${id}-bleed`;
  const grain = `${id}-grain`;
  return (
    <svg viewBox="0 0 240 240" className={className} style={style} aria-hidden="true">
      <defs>
        <filter id={bleed} x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="6" result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id={grain} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.11" numOctaves="3" seed="4" result="g" />
          <feColorMatrix
            in="g"
            type="matrix"
            values="0 0 0 0 0.32  0 0 0 0 0.18  0 0 0 0 0.08  0 0 0 0.55 0"
            result="gc"
          />
          <feComposite in="gc" in2="SourceAlpha" operator="in" result="gm" />
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="gm" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#${bleed})`}>
        <g filter={`url(#${grain})`}>
          {/* outermost, lightest wash */}
          <path
            fill="rgba(150, 105, 60, 0.22)"
            d="M80,30 C110,18 145,22 168,40 C190,56 198,78 192,100 C210,110 214,132 200,148
               C212,164 204,184 186,190 C190,206 178,220 162,218 C158,232 144,238 132,228
               C120,240 106,232 100,220 C86,226 76,214 78,200 C62,202 52,190 56,176
               C42,174 34,160 42,146 C28,140 24,124 36,114 C24,104 30,88 44,84
               C38,70 48,56 64,54 C62,40 70,32 80,30 Z"
          />
          {/* mid wash, offset up-left */}
          <path
            fill="rgba(120, 75, 35, 0.32)"
            d="M78,54 C100,44 126,46 142,60 C160,74 166,92 158,108 C172,116 174,132 162,142
               C168,154 160,168 146,170 C144,182 132,188 120,182 C110,192 96,188 92,176
               C78,178 68,168 70,156 C58,152 54,138 62,128 C52,120 52,106 64,98
               C58,86 64,72 78,68 C74,60 74,56 78,54 Z"
          />
          {/* darkest core, where the grounds settled */}
          <path
            fill="rgba(80, 45, 20, 0.48)"
            d="M88,72 C102,64 118,66 126,78 C136,88 134,102 122,108 C126,118 118,128 106,126
               C100,134 88,130 86,120 C76,120 72,108 80,100 C74,92 78,80 88,72 Z"
          />
          {/* drips trailing off the bottom edge */}
          <path
            fill="rgba(120, 75, 35, 0.3)"
            d="M96,214 C94,224 92,234 96,242 C100,248 106,246 106,238 C106,228 102,218 96,214 Z"
          />
          <path
            fill="rgba(120, 75, 35, 0.26)"
            d="M150,212 C152,222 156,230 152,238 C148,244 142,240 142,232 C142,224 146,216 150,212 Z"
          />
        </g>
      </g>

      {/* scattered splatter, outside the bleed filter so the dots stay crisp */}
      <circle cx="190" cy="40" r="3.2" fill="rgba(120, 75, 35, 0.3)" />
      <circle cx="205" cy="53" r="2" fill="rgba(120, 75, 35, 0.24)" />
      <circle cx="197" cy="65" r="1.6" fill="rgba(120, 75, 35, 0.2)" />
      <circle cx="176" cy="28" r="2.4" fill="rgba(120, 75, 35, 0.22)" />
    </svg>
  );
}

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
