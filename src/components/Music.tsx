import { Quatrefoil, Tracery } from "./ornaments";
import { Reveal } from "./Reveal";

const platforms = [
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/6KyeHDC5TiAoMHMjkQrRY5",
  },
  {
    name: "YouTube",
    href: "https://music.youtube.com/channel/UCyFkg91_hvOHa5ta9g0g5LA",
  },
];

export default function Music() {
  return (
    <section id="music" className="relative overflow-hidden px-6 py-24 sm:py-28">
      <Tracery className="pointer-events-none absolute left-[-16%] top-[-8%] h-[130%] w-[42%] text-stone/[0.05] sm:left-[-6%] sm:w-[22%]" />
      <div className="relative mx-auto max-w-3xl">
        <div className="flex items-center gap-4">
          <Quatrefoil className="h-6 w-6 text-stone-dim/50" />
          <h2 className="font-[family-name:var(--font-display)] text-4xl italic text-stone sm:text-5xl">
            Music
          </h2>
        </div>

        <Reveal variant="rise">
          <div className="listing-board relative mt-10 px-5 py-8 sm:px-8 sm:py-10">
            <div className="relative mb-7 flex justify-center gap-12 sm:mb-8">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-stone-dim/25" />
              ))}
            </div>

            <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {platforms.map((platform, i) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target={platform.href.startsWith("http") ? "_blank" : undefined}
                  rel={platform.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group stone-panel flex items-center justify-between gap-4 px-5 py-5 transition-transform duration-300 ease-out hover:-translate-y-0.5 sm:px-6 sm:py-6"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="specimen-label text-[0.65rem] text-ink/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-lg italic text-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-ink/50 sm:text-xl">
                      {platform.name}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative h-px w-7 shrink-0 bg-ink/30 transition-all duration-300 ease-out group-hover:w-10 group-hover:bg-ink"
                  >
                    <span className="absolute -right-0.5 -top-[3px] block h-[6px] w-[6px] rotate-45 border-r border-t border-ink/30 transition-colors group-hover:border-ink" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <p className="specimen-label mt-6 text-center text-[0.65rem] text-stone-dim">
          More platforms to be pressed in, in time
        </p>
      </div>
    </section>
  );
}
