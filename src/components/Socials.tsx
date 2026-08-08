import { CatSilhouette, Quatrefoil, Tracery } from "./ornaments";
import { Reveal } from "./Reveal";

const socials = [
  {
    name: "YouTube",
    href: "https://music.youtube.com/channel/UCyFkg91_hvOHa5ta9g0g5LA",
  },
  {
    name: "Spotify",
    href: "https://open.spotify.com/artist/6KyeHDC5TiAoMHMjkQrRY5",
  },
];

export default function Socials() {
  return (
    <section id="socials" className="relative overflow-hidden px-6 py-24 pb-32 sm:py-28 sm:pb-36">
      <Tracery className="pointer-events-none absolute left-[-18%] top-[-4%] h-[125%] w-[44%] text-stone/[0.045] sm:left-[-4%] sm:w-[20%]" />
      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="font-[family-name:var(--font-display)] text-4xl italic text-stone sm:text-5xl">
          Follow
        </h2>
        <Quatrefoil className="mx-auto mt-6 h-8 w-8 text-stone-dim/60" />

        <ul className="mt-14 flex flex-wrap justify-center gap-6 sm:gap-8">
          {socials.map((social, i) => (
            <li key={social.name}>
              <Reveal variant="settle" delay={i * 140}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex flex-col items-center gap-3 transition-transform duration-300 ease-out hover:-translate-y-1"
                >
                  <div
                    style={{ clipPath: "url(#ogive-sm)" }}
                    className="stone-panel flex h-24 w-20 items-center justify-center pt-3 sm:h-28 sm:w-24"
                  >
                    <CatSilhouette className="h-9 w-auto text-ink/70 sm:h-10" />
                  </div>
                  <span className="font-[family-name:var(--font-body)] text-sm italic text-stone underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-stone/50 sm:text-base">
                    {social.name}
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <p className="specimen-label mt-16 text-[0.65rem] text-stone-dim">
          Rollen&nbsp;· carved in the dark hours
        </p>
      </div>
    </section>
  );
}
