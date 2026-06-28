
# Let x be a company — Marketing Site Plan

A premium, modern marketing site built in the visual language of your references: deep midnight backgrounds, soft purple light bloom, glassy bento cards, generous spacing, and a refined serif/sans pairing. Ships with a polished light mode that mirrors the same elegance (warm off-white, lavender glow, ink-black type).

## Visual Direction

- **Palette (dark)**: near-black `#0A0A12` background, deep indigo `#1A1530` surfaces, primary purple `#8B5CF6` with glow `#A78BFA`, soft lavender accent.
- **Palette (light)**: warm off-white `#FAFAF7`, ink `#0F0F1A`, same purple primary so brand stays consistent, subtle lavender wash.
- **Type**: Instrument Serif (display headings, italic accents for "x") + Inter (body/UI). The italic "x" becomes a signature mark used in the logo and section dividers.
- **Motifs**: faint horizon glow behind hero (like the Quantix arc), bento grid with glass cards (like PromptPal), subtle binary/grid texture, soft purple shadows.
- **Theme toggle**: persistent top-right, smooth transition, both modes equally premium (not an afterthought).

## Pages / Sections (single-page with anchored sections + dedicated routes)

Routes: `/` (home), `/services`, `/work`, `/about`, `/contact`. Each route gets its own SEO head (title, description, og).

### Home
1. **Nav** — minimal: logo "let x be", links (Services, Work, About, Contact), theme toggle, "Start a project" CTA pill.
2. **Hero** — horizon glow backdrop. Eyebrow chip "Websites & Web apps". Headline: *"Let **x** be your unfair advantage."* Sub: one line on affordable-but-skilled positioning. Two CTAs: "Start a project" (filled purple) + "See our work" (ghost).
3. **Positioning strip** — short manifesto: "Affordable isn't amateur. It's leverage." Three small badges: Skilled · Strategic · Systemized.
4. **Services bento** (the centerpiece, mirrors PromptPal layout):
   - Large center card: **Website Building** — "Your site, engineered as a customer engine."
   - Side cards: pricing chip ("From $X / project"), stat ("Avg. 3-week delivery"), feature ("Integrated management built-in"), feature ("SEO & conversion baked in"), CTA card ("Get a quote →").
   - Second row: **Web Applications** card — "Custom apps, curated to your workflow." with sub-cards for discovery, build, handoff.
5. **How we position your brand** — 3-step process (Discover → Position → Engineer) with iconography and short copy explaining the "customer-generating engine" promise.
6. **Why affordable ≠ amateur** — split section: left = the myth, right = the reality (lean team, sharp process, no bloated agency overhead).
7. **Selected work / case teasers** — 3 project cards (placeholder until you share real work).
8. **Testimonial / proof** — single large quote card on glass.
9. **FAQ** — pricing, timeline, ownership, what's included.
10. **CTA footer band** — "Let x = your next move." with contact button.
11. **Footer** — minimal, brand mark, links, socials.

### Services (`/services`)
Deeper breakdown of Website Building and Web Applications, what's included at each tier, integrated management system explainer.

### Work (`/work`)
Grid of case studies (placeholder cards now, swap in real ones later).

### About (`/about`)
The philosophy behind the name, how the team works, the affordability thesis.

### Contact (`/contact`)
Simple form (name, email, project type, budget range, message) + direct email. Form is frontend-only for now (mailto or local handler) — wire to Lovable Cloud later if you want submissions stored.

## Technical Notes

- TanStack Start file-based routes under `src/routes/` (one file per page above).
- Tailwind v4 tokens defined in `src/styles.css`: semantic colors for both themes via `:root` and `.dark`, plus `--gradient-glow`, `--shadow-purple`, `--shadow-elegant`.
- Theme toggle via class on `<html>`, persisted to localStorage, no flash on load (inline `ScriptOnce`).
- Shadcn components reused (Button, Card, Accordion for FAQ, Input/Textarea for contact).
- Each route declares its own `head()` with unique title/description/og tags.
- Hero glow + bento textures done in CSS (radial gradients, blurred pseudo-elements) — no heavy images required, keeps it fast.
- Generated imagery only where it adds value (hero orb-style accent and a couple of card visuals), saved under `src/assets/`.
- Fully responsive: bento collapses to single column on mobile, nav becomes sheet menu.

## Out of Scope (this pass)

- Real case study content (placeholders used).
- Backend for contact form submissions (can add Lovable Cloud later).
- Blog / CMS.
- Auth, dashboards, payments.

Approve and I'll build it.
