import Image from "next/image";
import { CatSilhouette, Mullion } from "./ornaments";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24">
      <div className="film-grain" />

      <div className="relative flex w-full max-w-3xl flex-col items-center text-center">
        <div className="relative w-full max-w-md sm:max-w-lg">
          <div
            aria-hidden="true"
            className="candle-glow pointer-events-none absolute -inset-10 -z-10 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(201,202,206,0.16), transparent 70%)",
            }}
          />
          <Image
            src="/images/rollen-portrait.jpg"
            alt="Rollen, portrayed as a crowned figure in an ornate gilt frame, inside a candlelit cathedral"
            width={1024}
            height={1024}
            priority
            className="portrait-reveal w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)]"
          />
        </div>

        <div className="relative mt-8">
          <h1 className="font-[family-name:var(--font-display)] text-5xl italic leading-[0.95] tracking-tight text-stone sm:text-7xl">
            Rollen
          </h1>
          <p className="mt-4 text-balance font-[family-name:var(--font-body)] text-lg italic text-stone-dim sm:text-xl">
            Finding my way back, one song at a time
          </p>
        </div>

        <div className="pendant-sway mt-2 flex flex-col items-center">
          <Mullion className="h-20 w-5 text-stone-dim sm:h-24" />
          <a
            href="https://open.spotify.com/artist/6KyeHDC5TiAoMHMjkQrRY5"
            target="_blank"
            rel="noopener noreferrer"
            className="group -mt-1 flex flex-col items-center gap-3 text-stone-dim transition-colors hover:text-stone"
          >
            <CatSilhouette className="h-14 w-auto transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:h-16" />
            <span className="specimen-label text-[0.7rem]">Listen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
