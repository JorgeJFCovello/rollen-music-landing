---
name: Rollen
description: A fully monochrome carved-stone gothic cathedral, marked by one plain flat cat silhouette.
colors:
  ink: "#0a0b0d"
  ink-raised: "#17191c"
  stone: "#c9cace"
  stone-dim: "#9a9ca3"
  stone-deep: "#55575e"
  lead: "#101113"
typography:
  display:
    fontFamily: "Bodoni Moda, ui-serif, serif"
    fontSize: "clamp(2.5rem, 6vw, 6rem)"
    fontWeight: 400
    fontStyle: "italic"
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  body:
    fontFamily: "EB Garamond, ui-serif, serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 2
  label:
    fontFamily: "EB Garamond, ui-serif, serif"
    fontSize: "0.7rem"
    fontVariant: "small-caps"
    letterSpacing: "0.16em"
  label-sm:
    fontFamily: "EB Garamond, ui-serif, serif"
    fontSize: "0.65rem"
    fontVariant: "small-caps"
    letterSpacing: "0.16em"
components:
  panel:
    backgroundColor: "{colors.stone}"
    textColor: "{colors.ink}"
    padding: "48px 56px"
  link-row:
    textColor: "{colors.ink}"
  link-row-hover:
    textColor: "{colors.ink}"
---

# Design System: Rollen

## Overview

**Creative North Star: "The Plain Mark on Carved Stone"**

Rollen's page is a cold, carved-stone gothic nave — near-monochrome, austere, architectural — marked once, quietly, by a flat cat silhouette: the artist's own recurring album motif. This is the third iteration of this system in one session. The first (a Victorian-herbarium/paper-specimen conceit) was rejected outright ("the letter is not good"). The second (a circular stained-glass rose-window medallion holding a lit-up cat face) was also rejected — not for its craft, but for the whole idea of a colorful, glowing, framed "device": the user's explicit words were "I don't like the catMedallion" / "the whole concept," and the requested replacement was "simpler, more graphic... less illustrated, more restrained." This version is the direct answer to that: no color, no glow, no frame — a single flat silhouette, structurally integrated into the same stone-panel language as everything else on the page, not elevated as a separate ornament.

The lesson carried forward for any future work on this system: this product's cat motif earns its place by being understated. Do not re-introduce color, light, or a bespoke frame/badge shape for it — that was tried twice and rejected both times.

**Key Characteristics:**
- Fully monochrome UI system: ink and stone tones only, no saturated color anywhere in the built chrome — with two deliberate, explicitly-requested exceptions: the real Hero portrait photo, and mottled watercolor coffee stains on the Bio tablets (see Portrait Exception and Coffee Stain Exception rules).
- The cat motif is one SVG silhouette (`CatSilhouette`, single `currentColor` fill, no gradient, no stroke detail) reused at three sizes: the Hero "Listen" mark, small icons inside the Follow niches, and one quiet detail perched on a Bio tablet's edge.
- Panels are carved stone tablets with an ogive (pointed-arch) top on signature panels, coursing lines, grain, and a beveled inset shadow — never a flat card with a drop shadow standing in for stone.
- Display type is large and italic; labels are tracked small caps; section headings are plain words with no chapter numbering and no floating caption above them.
- No standalone caption/eyebrow labels float above a heading anywhere on the page (a prior draft's hero caption was removed for exactly this reason).
- The Hero is anchored by a real, full-color artist portrait (a stylized cat-as-crowned-figure painting, user-supplied) rather than an illustrated stone tablet — the one place on the page where a photographic/painted asset, not a designed UI surface, carries the scene.
- Motion is restrained and literal to the world: things that would physically move in a candlelit cathedral (a hung pendant swaying, candlelight breathing, a painting catching the light) are what moves; content elsewhere settles into place once, on scroll, rather than looping or drawing attention to itself.

## Colors

Fully monochrome. There is no accent, signature, or "pop" color anywhere in this system.

### Neutral
- **Ink** (`#0a0b0d`): the page ground and all body/heading text on stone panels.
- **Ink Raised** (`#17191c`): reserved for a raised dark surface distinct from the page ground; not yet used by a shipped component.
- **Stone** (`#c9cace`) / **Stone Dim** (`#9a9ca3`) / **Stone Deep** (`#55575e`): panel surface, secondary label text, carved-relief shading, and the `::selection` color pair. This triad is the entire palette.
- **Lead** (`#101113`): used only as an SVG filter tint value for the stone-grain texture; not a UI color.

### Named Rules
**The No Color Rule.** The designed UI system carries zero saturated hue. Two earlier rounds tried giving the cat *motif* its own color device (paper/oxblood, then stained-glass sapphire/ruby/gold) and both were explicitly rejected by the product owner. Do not add color back into any UI surface, icon, panel, or motif — including "just for the cat" — without a fresh, explicit request to do so.

**The Portrait Exception.** One deliberate exception to the No Color Rule is the real Hero portrait image (`public/images/rollen-portrait.jpg`) — a full-color, gilt-framed painting the artist supplied of themself as a crowned cat figure in a candlelit cathedral. The user explicitly chose to keep it full color rather than desaturate it to match the system. This is real photographic/artistic content, not a designed motif, so it is exempt from the No Color Rule the same way a real photo would be on any otherwise-monochrome site — but the exemption covers only this image. Do not desaturate it, and do not use it as license to add color anywhere else (icons, panels, hovers, the flat `CatSilhouette`).

**The Coffee Stain Exception.** The second deliberate exception is the `CoffeeStain` mark on the Bio tablets — a mottled, feathered watercolor blot in umber/amber tones (`rgba(80,45,20, …)` core through `rgba(150,105,60, …)` outer wash), composited with `mix-blend-multiply` so it reads as soaked into the stone rather than pasted on top. It went through two builds: the first was a clean donut/ring shape, which the user said "looks pretty bad" and referenced a real watercolor coffee-stain photo — an irregular mottled blob with an off-center dark core, feathered edges, and drips, not a tidy ring. The second build replaced the ring geometry entirely (organic hand-authored blob paths layered light-to-dark, an SVG `feTurbulence`+`feDisplacementMap` filter for a bled/torn edge, a second `feTurbulence`+`feColorMatrix` filter composited `in` the shape's own alpha for internal mottling, plus drip tendrils and scattered splatter dots). The exemption covers only the `CoffeeStain` component; it does not extend to any other panel, icon, or motif. Two color exceptions now exist (this and the Portrait); a third should not be added without an equally explicit request.

## Typography

**Display Font:** Bodoni Moda (italic), with ui-serif/serif fallback
**Body Font:** EB Garamond, with ui-serif/serif fallback
**Label Font:** EB Garamond, set in small-caps with wide tracking

**Character:** Bodoni Moda's high-contrast didone strokes read as carved/inscribed capitals and dramatic playbill lettering. EB Garamond's old-style figures and moderate contrast carry the inscribed-label and body-reading register. Both fonts have carried through all three iterations of this system unchanged — the material world changed twice, the type never needed to.

### Hierarchy
- **Display** (400, italic, `clamp(2.5rem, 6vw, 6rem)`, line-height 0.95): artist name and section headings, always italic.
- **Body** (400, `1.05rem`–`1.125rem`, line-height 2): bio copy, set with a faint ruled rhythm suggesting inscribed lines.
- **Label** (400, `0.7rem`, small-caps, tracking `0.16em`): primary captions.
- **Label Small** (400, `0.65rem`, small-caps, tracking `0.16em`): secondary labels — catalog numbers, footer notes.

### Named Rules
**The No Chapter Numbering Rule.** Section headings ("Music", "Bio", "Follow") carry no roman-numeral or "Chapter N" prefix. An earlier draft numbered every section like book chapters and the user explicitly rejected it ("I don't like the idea of chapters of a book"); headings are plain going forward. This is distinct from the Music list's "Cat. 01/02/03..." labels, which read as catalog/inventory numbers on individual list rows, not as a book's chapter structure, and were not part of this rejection.

**The No Floating Caption Rule.** No text label sits alone above a heading as a standalone eyebrow/kicker — a hero caption ("Rollen · Chapter VII...") was removed during review for doing exactly this. If a caption is wanted, it must live inside the same block as what it captions, not stacked above it.

## Layout

Single-column, centered, max-width `3xl` content column on a full-bleed dark stone ground — every section (Hero, Music, Bio, Socials) shares this same max-width so their headings and content align to one common left edge down the page. Music and Socials were widened from `2xl` to `3xl` specifically to match Bio (which needed `3xl` for its two-tablet layout); a mismatched max-width between sections was flagged as a visible misalignment and fixed — don't reintroduce a narrower width on any one section without widening the rest to match. The hero is a full `100svh` first viewport, vertically centered on the portrait image (`max-w-md`/`max-w-lg`), with the artist name and tagline set directly on the dark ground beneath it — no `Tracery` and no ogive stone tablet in Hero now that the portrait itself carries the scene; `Tracery` remains the atmosphere device for Music/Bio/Socials only. Subsequent sections use `py-24`–`py-28` vertical rhythm, each carrying a faint full-height `Tracery` anchored to one side so no section reads as a bare void. Mobile collapses padding/max-widths proportionally; the Follow niches wrap to two columns before stacking to one.

## Elevation & Depth

No conventional flat-elevation shadow scale. Depth comes from carved-stone materiality: each panel carries an inset top highlight, a full inset border, a bottom inset shadow, and left/right inset shadows that together read as a beveled relief cut into stone, plus a repeating 34px horizontal coursing-line pattern (ashlar block seams), an SVG `feTurbulence`-driven grain overlay (multiply-blended, 0.55 opacity) for stone irregularity, and a set of seven irregular radial-gradient blotches (`.stone-panel::after`, multiply-blended, monochrome ink) as a faint base "aging" texture on every panel. On the Bio tablets specifically, a much more visible warm-toned `CoffeeStain` mark (see Components and the Coffee Stain Exception) sits on top — the base `::after` blotches alone tested as too subtle for the user to notice. The `CatSilhouette` has no depth system of its own — it is deliberately flat, which is the point.

### Named Rules
**The Real Material Rule.** Any object claiming to be stone must be built from a texture/gradient/relief system that actually produces that irregularity — a flat color plus a plain box-shadow standing in for a material is a contradiction, not a shortcut.

**The Legible Weathering Rule.** A weathering/aging effect that the user can't actually see under normal viewing conditions doesn't count as shipped — it's invisible, not subtle. When in doubt, size and contrast an effect to be clearly noticeable first, then dial back only if asked. The `.stone-panel::after` age spots (`rgba(10,11,13,0.07–0.16)`) were shipped first and the user reported not being able to notice them at all; the visible `CoffeeStain` mark was added in direct response. Don't repeat that undershoot on future texture work.

## Shapes

Signature panels (Follow niches) use an ogive — a pointed Gothic arch — as their top edge via an SVG `clipPath` (`url(#ogive)` / `url(#ogive-sm)`), never `border-radius`. Music and Bio panels stay plain rectangular tablets (an inscribed altar-plaque silhouette) to vary density against the arched signature shapes. The `CatSilhouette` has its own organic contour (round head, triangular ears, curled tail) and is never placed inside a circular badge, ring, or frame — that framing device was tried and rejected. The Hero portrait is a plain rectangle (it carries its own ornate frame inside the image itself); the system does not add a second frame around it — the `ogive` clip-path is defined and still available for future panels but is no longer used on the Hero tablet, which the portrait replaced.

## Components

### Artist Portrait (Hero centerpiece)
`public/images/rollen-portrait.jpg`, rendered via `next/image` at `max-w-md`/`max-w-lg`, full color, no additional frame or clip-path (the image's own gilt frame and cathedral scene carry the composition), grounded with a soft dark `drop-shadow` rather than a stone-panel box-shadow. This is real user-supplied artwork, not a designed UI component — see the Portrait Exception color rule. It replaced the original illustrated ogive stone tablet as the Hero's dominant visual; the artist name and tagline now sit as plain text beneath it rather than inside a panel. On load it plays a one-time `.portrait-reveal` animation (scale/blur/opacity settling in, `1.6s`, `cubic-bezier(0.16,1,0.3,1)`), and a `.candle-glow` div breathes softly behind it on an infinite slow loop — the page's one ambient, always-running motion, meant to read as candlelight rather than as UI chrome. Both respect `prefers-reduced-motion`.

### Stone Panel (signature component)
The core content container (Hero card, each Bio tablet, Follow niches, and each individual tile inside the Listing Board). Pale cool-stone background (`#c9cace`), carved-relief inset shadows, coursing-line texture, grain overlay filter. Signature instances (Hero, Follow) additionally clip to the ogive arch shape.

### Listing Board (signature component)
A dark `ink-raised` frame (`.listing-board`) housing a 2-column grid of individually inset Stone Panel tiles — modeled on a church hymn board, where each hymn number sits as its own slotted plate rather than one continuous printed list. Three small `stone-dim` dots along the top read as mounting pegs. Used for the Music section's streaming-platform links; a plain divided `<ul>` list was tried first and explicitly rejected as too plain — this is the reusable pattern for any future "directory of links" content on this page, not a one-off.

### Coffee Stain
`CoffeeStain` in `ornaments.tsx` — a mottled, organic watercolor blot: three layered hand-authored blob paths (light outer wash → mid wash → dark off-center core), two thin drip tendrils off the bottom edge, and four small scattered splatter dots outside the main blot. The whole blot passes through a `feTurbulence`+`feDisplacementMap` filter for a bled, non-geometric edge, plus a second `feTurbulence`+`feColorMatrix`+`feComposite` filter (composited `in` the shape's own alpha, so the grain never spills past its boundary) for internal mottling. Takes a required `id` prop that seeds its local filter defs, since each instance needs unique filter IDs in the same document. One per Bio tablet, each a different size/rotation/corner (`h-32/h-36` `rotate-[8deg]` bottom-right on the first, `h-28/h-32` `-rotate-[12deg]` top-left on the second) so the two don't look like a copy-pasted sticker. This is the page's Coffee Stain color exception — see the Colors section's named rule before adding it anywhere else. Not a ring/donut shape — that was the first attempt and was rejected as looking "pretty bad" against a real coffee-stain reference photo.

### Twin Tablets (Bio layout)
Bio's copy splits across two separate Stone Panels side by side, joined by a full-height `Mullion` in the gap between them — "two tablets facing each other across an aisle," not one continuous surface. This exists because the first version butted the two panels edge-to-edge with only a 1px hairline between them, which rendered as an open book with a spine down the middle; the user had just rejected a "chapters of a book" framing for section headings, and the accidental book shape read as a direct regression. The real gap plus a visible Mullion is what keeps this as two carved monuments rather than one book — don't close that gap back up.

### Cat Silhouette (signature motif)
A single flat SVG silhouette (round head, two triangular ears, sitting body, curled tail), rendered in one `currentColor` fill with no internal detail, gradient, stroke, glow, or frame. Used at three places and scales: as the primary "Listen" mark in Hero (hanging from the Mullion, ~56–64px tall), as a small icon inside each Follow niche (~36–40px), and once as a small, low-opacity detail perched on a Bio tablet's top edge (~32–36px) as a quiet recurring touch. Never colorize it, never put it in a circle/badge, never add a glow — all three were tried in earlier rounds and explicitly rejected.

### Mullion
A slender vertical stone connector (rect + three small circular studs). Used descending from the Hero panel to the Listen mark, and again standing full-height between Bio's two tablets. Monochrome stone-dim. In Hero specifically, the Mullion and the Listen mark are wrapped together as one `.pendant-sway` unit and rotate together, gently, as a single hung object — never separately, or the chain and the mark it carries would visually disconnect.

### Quatrefoil
A small four-circle finial (`h-6 w-6`, `stone-dim/50`) marking each section heading — Music, Bio, Follow. Sits inline to the *left* of the heading text, like a bullet mark (`flex items-center gap-4`, or `justify-center` for Follow's centered heading), never stacked underneath it and never to the right. Two earlier versions were tried and moved on from: first stacked below the heading (read as an awkward floating fragment), then placed to the right of the heading text (read as trailing punctuation rather than a mark that introduces the title). Left-of-heading is also what keeps it flush with the container's left edge, aligned with the content below it.

### Tracery (signature background device)
A hand-authored SVG line engraving of nested pointed arches and a small rose piercing, used at low opacity (stone-tone `0.045`–`0.09`) as a full-height background accent per section, offset to one side.

### Links / Rows
Text-only, italic EB Garamond, ink color throughout (no hover color change — there is no second color to shift to). Hover feedback comes from an underline fading in, a directional hairline arrow darkening/extending, or a small translate — never a color change.

### Reveal (motion pattern)
`src/components/Reveal.tsx`, a client component that adds one of `reveal-rise` / `reveal-tilt-left` / `reveal-tilt-right` / `reveal-settle` plus `reveal-visible` the first time an element scrolls into view (`IntersectionObserver`, fires once, `900ms` `cubic-bezier(0.16,1,0.3,1)` opacity/transform/blur). Content is always present in the DOM at full opacity for no-JS/reduced-motion; the class is additive, not a display toggle. Variant is chosen per section rather than reused identically everywhere: Music's board rises as one block; Bio's two tablets tilt in from opposite angles (`tilt-left`/`tilt-right`, staggered `150ms`) like two tablets being set down in turn; Follow's niches use `settle` (a slight scale-up) staggered `140ms` per item, like niches being lit one after another. Don't apply the same variant to every section — that was the exact "one identical entrance everywhere" pattern this file's craft guidance warns against.

### Named Rules
**The Physical Motion Rule.** Anything that animates on this page should correspond to something that would actually move in the scene it depicts — a hung pendant swaying, candlelight breathing, a painting settling into view, panels being physically placed. Don't add motion (spinners, pulsing dots, decorative loops) that has no physical referent in a candlelit stone cathedral.

## Do's and Don'ts

### Do:
- **Do** keep the entire system monochrome (ink/stone/lead only), per the No Color Rule.
- **Do** render every "stone" surface with the coursing-line + grain + multi-directional inset-shadow system, per the Real Material Rule.
- **Do** keep the cat silhouette flat, uncolored, and unframed everywhere it appears.
- **Do** keep section headings plain words with no chapter/roman-numeral prefix and no floating caption above them, per the No Chapter Numbering and No Floating Caption rules.

### Don't:
- **Don't** revive the paper/specimen-plate/deckle-edge conceit from the herbarium direction — rejected round 1.
- **Don't** revive a colored, glowing, or circular-badge/medallion treatment for the cat motif — rejected round 2, in explicit and strong terms.
- **Don't** use `border-radius` as a corner strategy anywhere in this system; the ogive arch and plain rectangular tablet are the shape language.
- **Don't** add a standalone label/eyebrow above any heading.
- **Don't** butt two Stone Panels edge-to-edge with only a hairline between them — at a wide enough aspect ratio that reads as an open book's spine, which this system explicitly avoids. Always give adjoining panels a real gap.
- **Don't** give one section a different content max-width than the others. Every section shares `max-w-3xl` so headings and content line up to one edge down the page; a section-specific width change caused a visible misalignment and was fixed by unifying all sections instead of narrowing the one that needed more room.
