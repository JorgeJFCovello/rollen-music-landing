# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Fans and potential fans discovering Rollen online — arriving from social media, playlist credits, or word of mouth — deciding in seconds whether to click through and listen.

## Product Purpose
A single-page artist landing site for the musician Rollen. Its job is to convert a visitor's attention into a stream: get them to click through to Rollen's music on streaming platforms (Spotify, Apple Music, YouTube, etc.). Secondary goal is growing social following (Instagram, TikTok, YouTube).

## Positioning
Rollen makes gothic/dark alternative music. The sound itself is dark and atmospheric, so the visual identity should genuinely match the music rather than being a surface-level aesthetic applied to unrelated content.

## Operating Context
Static single-page site, no backend, no CMS, no forms. Deployed as a static export (see CLAUDE.md) — no server runtime at deploy time. Visitors land, absorb the artist's identity, and click out to external platforms (streaming services, social platforms).

## Capabilities and Constraints
No Tour or Contact sections by design. No forms, no server-side logic, no CMS — all content is hardcoded in components and edited directly in code. Content sections: Hero, Music, Bio, Socials (see CLAUDE.md folder structure).

## Brand Commitments
Artist name: Rollen. No confirmed logo, photography, bio copy, or streaming/social links yet — the user will provide real assets and copy in a follow-up. Do not fabricate testimonials, press quotes, release dates, or specific streaming/social URLs; use clearly marked placeholders until real content is supplied.

Cats are a recurring visual/thematic motif across every Rollen album — a confirmed, durable brand element. Any visual system for this artist should find a genuine, non-cartoonish way to include cats rather than treating the request as decorative flourish. The artist's own chosen portrait image (see Evidence on Hand) is itself a stylized cat portrait — this is the artist's real visual identity, not a design placeholder.

## Evidence on Hand
Real bio copy is in place (Bio.tsx), user-supplied and lightly polished in tone to match the page's voice, split across the two Bio tablets. Real Hero tagline: "Finding my way back, one song at a time." Real Spotify (`open.spotify.com/artist/6KyeHDC5TiAoMHMjkQrRY5`) and YouTube Music (`music.youtube.com/channel/UCyFkg91_hvOHa5ta9g0g5LA`) links are wired into the Hero "Listen" mark, the Music listing board, and the Follow niches — these are the only two platforms the artist currently has. Apple Music, Bandcamp, Instagram, and TikTok entries were removed from the Music and Follow lists rather than shown as placeholders, since the user doesn't have those accounts yet; add them back in when real accounts/links exist.

A real artist portrait is in place at `public/images/rollen-portrait.jpg` (1024x1024) and used as the Hero centerpiece: a full-color, ornately gilt-framed painting of a crowned cat figure inside a candlelit cathedral, user-supplied and explicitly confirmed to stay full color rather than desaturated to match the rest of the page. This is the page's one deliberate exception to the otherwise-strict monochrome system (see DESIGN.md's Portrait Exception rule) — do not desaturate it or add further color elsewhere to "match" it.

## Product Principles
- The visual world must feel like an authentic extension of dark/gothic alternative music, not a costume — realism and atmosphere over cartoonish or generic "spooky" tropes.
- Every design decision should serve the primary conversion action: getting the visitor to stream the music.
- Keep the site genuinely static and dependency-light per CLAUDE.md constraints — no backend, no forms, no CMS.
- Original and specific over templated — avoid generic "band website" visual clichés.
- Real content only; placeholders stay visibly provisional until the user supplies real assets/copy.
