import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Sparkles, Layers, Gauge, Code2, Search, Wrench, CheckCircle2, Quote } from "lucide-react";
import orb from "../assets/orb.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Let x be — Premium websites at honest prices" },
      { name: "description", content: "We build elegant, conversion-driven websites and bespoke web apps. Affordable isn't amateur — it's leverage." },
      { property: "og:title", content: "Let x be — Premium websites at honest prices" },
      { property: "og:description", content: "Websites and web apps engineered as customer-generating engines." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-texture opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/60 px-4 py-1.5 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Websites & web apps · est. craft, honest pricing
          </div>
          <h1 className="mx-auto mt-8 max-w-4xl font-display text-5xl leading-[1.05] sm:text-7xl md:text-8xl">
            Let <em className="text-gradient not-italic">x</em> be your
            <br />
            unfair advantage.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            We build premium websites and custom web apps that don't just look good —
            they position your brand and quietly run as customer-generating engines.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02]">
              Start a project <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/work" className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface-elevated/60 px-6 text-sm font-medium backdrop-blur hover:bg-accent">
              See our work
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6">
          <p className="font-display text-xl sm:text-2xl">
            Affordable isn't amateur. It's <em className="text-gradient not-italic">leverage</em>.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Skilled", "Strategic", "Systemized"].map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mb-12 text-center">
          <div className="text-xs uppercase tracking-widest text-primary">— Services —</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">What we build</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-[auto_auto]">
          {/* tall left */}
          <div className="glass-card rounded-3xl p-7 md:row-span-2">
            <Layers className="h-6 w-6 text-primary" />
            <h3 className="mt-6 font-display text-3xl leading-tight">
              Effortless brand presence
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              We don't ship templates. Every site is positioned, written, and engineered
              around how your customer actually decides.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-background/40 p-4">
              <div className="font-display text-2xl">From $X<span className="text-sm text-muted-foreground">/project</span></div>
              <div className="mt-1 text-xs text-muted-foreground">Transparent pricing, no retainer trap.</div>
            </div>
          </div>

          {/* big center */}
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 md:col-span-2 md:row-span-2">
            <div className="absolute inset-0 bg-[var(--gradient-primary)] opacity-90" />
            <div className="absolute inset-0 grid-texture opacity-20" />
            <div className="relative flex h-full flex-col items-center text-center">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                <Sparkles className="h-3 w-3" /> Let x be
              </div>
              <h3 className="mt-6 font-display text-4xl text-white sm:text-5xl md:text-6xl">
                Your customer-<br />generating engine
              </h3>
              <div className="relative mt-6 flex flex-1 items-center justify-center">
                <img src={orb} alt="" width={420} height={420} className="h-auto w-[280px] sm:w-[360px] drop-shadow-[0_0_60px_rgba(167,139,250,0.6)]" />
              </div>
            </div>
          </div>

          {/* right top */}
          <div className="glass-card rounded-3xl p-6">
            <div className="flex h-12 items-center justify-between rounded-full bg-background/60 px-2">
              <span className="ml-3 text-xs font-medium">SEO baked in</span>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[var(--gradient-primary)] text-white">
                <Search className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Schema, semantic markup, performance — every page found.
            </p>
          </div>

          {/* right middle */}
          <div className="glass-card rounded-3xl p-6">
            <div className="font-display text-5xl text-gradient">3wk</div>
            <div className="mt-1 text-sm font-medium">average delivery</div>
            <div className="mt-3 text-xs text-muted-foreground">Discovery to live, without the agency drag.</div>
          </div>

          {/* bottom row: web apps */}
          <div className="glass-card rounded-3xl p-7">
            <Code2 className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-2xl">Custom web apps</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Internal tools, dashboards, client portals — curated to your workflow.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-7 md:col-span-2">
            <Gauge className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-2xl">Integrated management</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your site becomes the back-office: leads, content, bookings, payments — one place.
            </p>
          </div>

          <div className="glass-card relative overflow-hidden rounded-3xl p-7">
            <div className="absolute inset-0 bg-[var(--gradient-glow)] opacity-60" />
            <div className="relative">
              <div className="text-xs text-muted-foreground">Ready when you are</div>
              <Link to="/contact" className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground">
                Get a quote <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 text-center">
            <div className="text-xs uppercase tracking-widest text-primary">— Process —</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">How we position your brand</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Search, n: "01", t: "Discover", d: "We dig into your offer, audience, and the decision your customer is actually making." },
              { icon: Sparkles, n: "02", t: "Position", d: "We sharpen the narrative — what to say, where, and why anyone should care." },
              { icon: Wrench, n: "03", t: "Engineer", d: "We build it as a system: fast, indexable, conversion-driven, easy to run." },
            ].map((s) => (
              <div key={s.n} className="glass-card rounded-3xl p-7">
                <div className="flex items-center justify-between">
                  <s.icon className="h-6 w-6 text-primary" />
                  <span className="font-display text-3xl text-muted-foreground">{s.n}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFFORDABLE ≠ AMATEUR */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">— Our thesis —</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Affordable <em className="text-gradient not-italic">≠</em> amateur.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We're priced fairly because we're sharp — not because we cut corners.
              A lean team, a tight process, and zero agency overhead means the value
              lands on your site, not on someone's office lease.
            </p>
          </div>
          <div className="space-y-3">
            {[
              "Senior craft on every build — no junior-handoff games",
              "Positioning included — copy and structure, not just visuals",
              "Built to convert and to run, not just to look good in a portfolio",
              "No retainer lock-in — you own the asset",
            ].map((p) => (
              <div key={p} className="flex items-start gap-3 rounded-2xl border border-border bg-surface-elevated/60 p-4 backdrop-blur">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <Quote className="mx-auto h-8 w-8 text-primary" />
          <p className="mt-6 font-display text-3xl leading-snug sm:text-4xl">
            "They didn't just ship a website. They handed us a system that
            keeps pulling customers in months after launch."
          </p>
          <div className="mt-6 text-sm text-muted-foreground">— Founder, early client</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-widest text-primary">— FAQ —</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Common questions</h2>
        </div>
        <div className="space-y-3">
          {[
            { q: "How are you affordable but premium?", a: "Lean team, no middle management, sharp process. The savings come from how we operate — not from cutting craft." },
            { q: "What's your typical timeline?", a: "Most marketing sites ship in 2–4 weeks. Custom web apps depend on scope, but we'll scope it tightly upfront." },
            { q: "Do I own everything?", a: "Yes. Code, content, domains, accounts — all yours. We're builders, not gatekeepers." },
            { q: "Do you handle copy and positioning?", a: "Yes. Positioning is the work. The site is the deliverable." },
            { q: "Can you build something custom — not just a website?", a: "Yes. We build internal tools, client portals, dashboards, and bespoke web apps." },
          ].map((f) => (
            <details key={f.q} className="group glass-card rounded-2xl p-5">
              <summary className="flex cursor-pointer items-center justify-between text-base font-medium">
                {f.q}
                <span className="text-xl text-muted-foreground transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-5xl sm:text-6xl">
            Let <em className="text-gradient not-italic">x</em> = your next move.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Tell us about your project. We'll come back with a tight plan and an honest price.
          </p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)]">
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
