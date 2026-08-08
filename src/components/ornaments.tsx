import type { CSSProperties } from "react";

type SvgProps = { className?: string; style?: CSSProperties };

const COFFEE_STAIN_VARIANTS = {
  // Roughly round blot, core upper-left, drips off the bottom.
  a: {
    seeds: { bleed: "6", grain: "4" },
    outer:
      "M80,30 C110,18 145,22 168,40 C190,56 198,78 192,100 C210,110 214,132 200,148 \
       C212,164 204,184 186,190 C190,206 178,220 162,218 C158,232 144,238 132,228 \
       C120,240 106,232 100,220 C86,226 76,214 78,200 C62,202 52,190 56,176 \
       C42,174 34,160 42,146 C28,140 24,124 36,114 C24,104 30,88 44,84 \
       C38,70 48,56 64,54 C62,40 70,32 80,30 Z",
    mid:
      "M78,54 C100,44 126,46 142,60 C160,74 166,92 158,108 C172,116 174,132 162,142 \
       C168,154 160,168 146,170 C144,182 132,188 120,182 C110,192 96,188 92,176 \
       C78,178 68,168 70,156 C58,152 54,138 62,128 C52,120 52,106 64,98 \
       C58,86 64,72 78,68 C74,60 74,56 78,54 Z",
    core:
      "M88,72 C102,64 118,66 126,78 C136,88 134,102 122,108 C126,118 118,128 106,126 \
       C100,134 88,130 86,120 C76,120 72,108 80,100 C74,92 78,80 88,72 Z",
    drips: [
      "M96,214 C94,224 92,234 96,242 C100,248 106,246 106,238 C106,228 102,218 96,214 Z",
      "M150,212 C152,222 156,230 152,238 C148,244 142,240 142,232 C142,224 146,216 150,212 Z",
    ],
    dots: [
      { cx: 190, cy: 40, r: 3.2 },
      { cx: 205, cy: 53, r: 2 },
      { cx: 197, cy: 65, r: 1.6 },
      { cx: 176, cy: 28, r: 2.4 },
    ],
  },
  // Elongated, dragged-looking blot, core lower-right, drips off the side.
  b: {
    seeds: { bleed: "11", grain: "9" },
    outer:
      "M60,70 C85,50 120,45 150,55 C178,64 198,82 200,108 C214,116 220,136 208,152 \
       C218,168 210,188 192,196 C194,210 182,222 166,220 C160,232 146,236 136,226 \
       C122,236 108,230 106,216 C90,220 78,210 80,196 C64,196 54,184 60,170 \
       C46,166 40,152 50,142 C38,134 40,118 54,112 C48,98 56,84 72,80 C68,74 62,72 60,70 Z",
    mid:
      "M96,86 C118,74 142,76 156,92 C172,106 174,124 162,136 C176,144 176,160 162,168 \
       C166,180 156,192 142,190 C138,200 126,204 116,196 C102,198 92,188 96,176 \
       C82,172 78,158 88,148 C76,140 78,124 92,118 C86,106 90,94 100,90 C98,88 96,87 96,86 Z",
    core:
      "M124,118 C138,110 152,114 158,126 C166,136 162,150 150,154 C152,164 142,172 130,168 \
       C122,176 110,170 110,160 C98,158 96,144 106,136 C100,126 108,116 120,116 C122,116 123,117 124,118 Z",
    drips: [
      "M198,140 C208,138 218,140 222,146 C226,152 220,158 212,156 C204,154 196,148 198,140 Z",
    ],
    dots: [
      { cx: 46, cy: 200, r: 3 },
      { cx: 34, cy: 212, r: 2 },
      { cx: 54, cy: 222, r: 1.6 },
      { cx: 30, cy: 190, r: 2.2 },
    ],
  },
  // A double-lobed "set down twice" blot, wide and low, core in the overlap.
  c: {
    seeds: { bleed: "17", grain: "13" },
    outer:
      "M50,90 C60,70 85,58 110,60 C130,50 155,52 170,68 C190,78 200,98 190,116 \
       C204,124 206,144 190,156 C196,172 184,186 166,182 C160,196 144,200 132,190 \
       C116,198 100,190 98,176 C80,180 66,168 70,152 C54,150 44,136 52,122 \
       C40,116 40,100 50,90 Z",
    mid:
      "M76,88 C92,76 112,76 124,88 C140,80 158,86 164,100 C176,104 180,120 168,130 \
       C174,142 164,154 150,150 C146,160 132,164 122,156 C108,162 96,154 96,142 \
       C82,142 74,130 80,118 C70,112 72,98 84,94 C82,92 78,90 76,88 Z",
    core:
      "M96,104 C106,98 118,100 122,110 C128,118 124,128 114,130 C116,138 108,144 100,138 \
       C92,142 86,134 90,126 C82,124 80,114 88,108 C90,106 93,105 96,104 Z",
    drips: [
      "M112,176 C110,184 108,192 112,198 C116,202 120,198 120,192 C120,186 116,180 112,176 Z",
      "M138,178 C140,186 142,192 138,198 C134,202 130,198 130,192 C130,186 136,180 138,178 Z",
    ],
    dots: [
      { cx: 60, cy: 196, r: 2.4 },
      { cx: 48, cy: 206, r: 1.8 },
      { cx: 66, cy: 212, r: 1.4 },
    ],
  },
} as const;

/**
 * An irregular watercolor-style coffee stain: a mottled, feathered blot with a darker
 * off-center core, a dripping edge, and a few scattered splatter dots. The one
 * deliberately warm-toned mark in an otherwise monochrome system, per explicit request.
 * `id` must be unique per instance — it seeds the local filter defs. Three distinct
 * `variant`s exist (`"a"`, `"b"`, `"c"`; different silhouette, core position, drip
 * direction, splatter placement) so stains placed on the same page don't read as the
 * same sticker reused.
 */
export function CoffeeStain({
  id,
  variant = "a",
  className,
  style,
}: SvgProps & { id: string; variant?: keyof typeof COFFEE_STAIN_VARIANTS }) {
  const v = COFFEE_STAIN_VARIANTS[variant];
  const bleed = `${id}-bleed`;
  const grain = `${id}-grain`;
  return (
    <svg viewBox="0 0 240 240" className={className} style={style} aria-hidden="true">
      <defs>
        <filter id={bleed} x="-30%" y="-30%" width="160%" height="160%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.018"
            numOctaves="2"
            seed={v.seeds.bleed}
            result="n"
          />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="14" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id={grain} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.11" numOctaves="3" seed={v.seeds.grain} result="g" />
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
          <path fill="rgba(150, 105, 60, 0.22)" d={v.outer} />
          {/* mid wash */}
          <path fill="rgba(120, 75, 35, 0.32)" d={v.mid} />
          {/* darkest core, where the grounds settled */}
          <path fill="rgba(80, 45, 20, 0.48)" d={v.core} />
          {/* drips trailing off the edge */}
          {v.drips.map((d, i) => (
            <path key={i} fill="rgba(120, 75, 35, 0.28)" d={d} />
          ))}
        </g>
      </g>

      {/* scattered splatter, outside the bleed filter so the dots stay crisp */}
      {v.dots.map((dot, i) => (
        <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill="rgba(120, 75, 35, 0.26)" />
      ))}
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
