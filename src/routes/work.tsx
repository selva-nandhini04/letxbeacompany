import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work: Let x be" },
      { name: "description", content: "Selected projects: websites and custom web apps built to convert and to last." },
      { property: "og:title", content: "Work: Let x be" },
      { property: "og:description", content: "A look at recent websites and web apps we have shipped." },
    ],
  }),
  component: Work,
});

const projects = [
  { title: "Northstar Studio", tag: "Brand site, 3 weeks", desc: "Repositioned a design studio around a single sharp offer. 2.4x lead rate in month one. They owe us a beer." },
  { title: "Atlas Bookings", tag: "Web app, 6 weeks", desc: "Custom booking and operations dashboard for a 4-location service business. Murdered 3 bloated SaaS tools in cold blood." },
  { title: "Field & Form", tag: "E-commerce, 4 weeks", desc: "Premium product site with a content engine so good it practically sells the stuff itself." },
  { title: "Quanta Health", tag: "SaaS marketing, 3 weeks", desc: "B2B narrative site that finally explained what on earth they actually do." },
  { title: "Ledger Co.", tag: "Client portal, 5 weeks", desc: "White-label portal with document workflows. Made their clients think they are a Fortune 500 company." },
  { title: "Mono Coffee", tag: "Brand site, 2 weeks", desc: "Small site, sharp copy, lightning fast. Exactly what a great brand needs without the fluff." },
];

function Work() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <div className="text-xs uppercase tracking-widest text-primary">Selected work</div>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl">
            Built to <em className="text-gradient not-italic">earn its keep</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            A few recent projects. Every single one was positioned, written, designed, and engineered in-house by people who actually care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.title} className="glass-card group relative overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[image:var(--gradient-primary)] relative">
                <div className="absolute inset-0 grid-texture opacity-30" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="font-display text-5xl text-primary-foreground/90">0{i + 1}</div>
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-xs text-muted-foreground">{p.tag}</div>
                  <h3 className="mt-1 font-display text-2xl">{p.title}</h3>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-24 text-center">
        <h2 className="font-display text-4xl">Your amazing project goes here next.</h2>
        <Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)]">
          Start a project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
