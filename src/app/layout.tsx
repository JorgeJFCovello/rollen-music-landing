import type { Metadata } from "next";
import { Bodoni_Moda, EB_Garamond } from "next/font/google";
import "./globals.css";

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  style: ["normal", "italic"],
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-body",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rollen",
  description: "Official landing page for Rollen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${garamond.variable}`}>
      <body className="bg-ink text-paper antialiased">
        <div
          aria-hidden="true"
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{
            __html: `<!--
THESIS: Rollen's page as a fully monochrome carved-stone cathedral, where the artist's own cat
motif appears as one plain flat silhouette -- never a colored, glowing, or framed "device" --
refusing both camp gothic and an over-illustrated mascot.
OWN-WORLD: near-monochrome charcoal/stone ground and panels (ogive-arched, carved-relief, no
saturated color anywhere); a single flat cat silhouette (CatSilhouette) in stone/ink tone, used
as the primary listen mark, in Follow niches, and once as a small perched detail in Bio; Bodoni
Moda display, EB Garamond labels/body; gothic window tracery line engravings.
STORY: a visitor recognizes austere carved-stone craft, notices the plain cat mark recurring
quietly across the page as the artist's real signature, and clicks through to stream.
FIRST VIEWPORT: full-bleed dark stone nave, an ogive-arched stone tablet bearing the artist name
in display italic, a carved mullion descending to a small flat cat silhouette "listen" mark.
FORM: gothic cathedral, monochrome cat-silhouette redesign -- supersedes a stained-glass cat
medallion the user explicitly rejected ("I don't like the catMedallion" / "the whole concept"),
which itself superseded a prior herbarium direction (seed key f99d66c4), both per explicit user request.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review,
the verdict, and DESIGN.md.
-->`,
          }}
        />
        <svg aria-hidden="true" className="absolute h-0 w-0 overflow-hidden">
          <defs>
            <clipPath id="ogive" clipPathUnits="objectBoundingBox">
              <path d="M0,1 L0,0.32 C0,0.13 0.22,0 0.5,0 C0.78,0 1,0.13 1,0.32 L1,1 Z" />
            </clipPath>
            <clipPath id="ogive-sm" clipPathUnits="objectBoundingBox">
              <path d="M0,1 L0,0.42 C0,0.16 0.24,0 0.5,0 C0.76,0 1,0.16 1,0.42 L1,1 Z" />
            </clipPath>
          </defs>
          <filter id="stonegrain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.9"
              numOctaves="2"
              seed="7"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="0 0 0 0 0.24
                      0 0 0 0 0.25
                      0 0 0 0 0.27
                      0 0 0 0.6 0"
            />
          </filter>
          <filter id="grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="3"
              seed="3"
              stitchTiles="stitch"
              result="noise"
            />
            <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
          </filter>
        </svg>
        {children}
      </body>
    </html>
  );
}
