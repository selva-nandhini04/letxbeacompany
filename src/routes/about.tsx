import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Let x be" },
      { name: "description", content: "A small, senior studio building premium websites and web apps at honest prices." },
      { property: "og:title", content: "About — Let x be" },
      { property: "og:description", content: "Why we exist, how we work, and what we believe about pricing." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
          <div className="text-xs uppercase tracking-widest text-primary">— About —</div>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl">
            Let <em className="text-gradient not-italic">x</em> = the variable
            <br /> in your growth.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Most agencies sell you hours. Most freelancers sell you deliverables.
            We sell you the variable that actually moves the needle — the website
            or web app that turns interest into customers.
          </p>
          <p>
            We're small on purpose. Senior on every build. Allergic to bloat.
            That's why we can be priced fairly without ever feeling cheap.
          </p>
          <p>
            We believe the website is the brand's hardest-working employee.
            So we engineer it that way: clear positioning, sharp copy, fast
            performance, and the back-office plumbing it needs to actually run.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { n: "01", t: "Senior craft", d: "No junior handoff. The people you talk to are the people who build it." },
            { n: "02", t: "Positioning first", d: "We write the strategy into the structure. Copy and design aren't separate stages." },
            { n: "03", t: "Honest pricing", d: "Fixed fees, scoped tightly. No retainers, no surprise invoices." },
          ].map((v) => (
            <div key={v.n} className="glass-card rounded-3xl p-7">
              <div className="font-display text-3xl text-muted-foreground">{v.n}</div>
              <h3 className="mt-4 font-display text-2xl">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-display text-4xl sm:text-5xl">Want to work together?</h2>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)]">
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
