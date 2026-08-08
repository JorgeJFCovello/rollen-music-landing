import { CatSilhouette, Mullion, Quatrefoil, Tracery } from "./ornaments";
import { Reveal } from "./Reveal";

const ruledText = {
  backgroundImage:
    "repeating-linear-gradient(transparent, transparent calc(2em - 1px), rgba(10,11,13,0.08) calc(2em - 1px), rgba(10,11,13,0.08) 2em)",
  backgroundPositionY: "0.15em",
} as const;

export default function Bio() {
  return (
    <section id="bio" className="relative overflow-hidden px-6 py-24 sm:py-28">
      <Tracery className="pointer-events-none absolute right-[-16%] top-[-6%] h-[130%] w-[42%] -scale-x-100 text-stone/[0.05] sm:right-[-6%] sm:w-[22%]" />
      <div className="relative mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-display)] text-4xl italic text-stone sm:text-5xl">
          Bio
        </h2>
        <Quatrefoil className="mt-6 h-8 w-8 text-stone-dim/60" />

        <div className="relative mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12">
          <Mullion className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-4 -translate-x-1/2 text-stone-dim/70 sm:block" />

          <Reveal variant="tilt-left">
            <div className="stone-panel relative px-8 py-10 sm:px-10 sm:py-12">
              <CatSilhouette className="pointer-events-none absolute -top-5 right-8 h-8 w-auto text-ink/25 sm:h-9" />
              <p
                className="font-[family-name:var(--font-body)] text-[1.05rem] leading-[2] text-ink/80 sm:text-lg"
                style={ruledText}
              >
                <span className="float-left mr-2 font-[family-name:var(--font-display)] text-6xl italic leading-[0.8] text-ink">
                  H
                </span>
                ey there — Rollen here.
                <br />
                <br />
                I&rsquo;m a music guy finding my way back to myself after a long stretch away from
                music.
              </p>
            </div>
          </Reveal>

          <Reveal variant="tilt-right" delay={150}>
            <div className="stone-panel relative px-8 py-10 sm:px-10 sm:py-12">
              <p
                className="font-[family-name:var(--font-body)] text-[1.05rem] leading-[2] text-ink/80 sm:text-lg"
                style={ruledText}
              >
                I don&rsquo;t know exactly where this is going yet. I just want to make things
                that feel honest, chase different sounds, put real feeling into the music, and
                build something I can be proud of.
                <br />
                <br />
                So yeah — this is me finding my way back to music, one song at a time.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
