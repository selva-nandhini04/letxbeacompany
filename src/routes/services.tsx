import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, Globe, Code2, Settings2, Gauge, Search, Wrench } from "lucide-react";
import { useCurrency } from "../lib/use-currency";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services: Let x be" },
      { name: "description", content: "Website building and custom web applications, priced fairly and engineered to actually make you money." },
      { property: "og:title", content: "Services: Let x be" },
      { property: "og:description", content: "Premium websites and custom web apps. Positioning included." },
    ],
  }),
  component: Services,
});

function Services() {
  const { symbol } = useCurrency();
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-16 text-center">
          <div className="text-xs uppercase tracking-widest text-primary">Services</div>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl">
            Two things. Done <em className="text-gradient not-italic">properly</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            We focus on just two things so we do not mess them up. Websites that earn their keep, and
            custom web apps that fit your workflow perfectly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="glass-card overflow-hidden rounded-3xl">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="relative overflow-hidden p-10 bg-[image:var(--gradient-primary)] text-primary-foreground">
              <div className="absolute inset-0 grid-texture opacity-20" />
              <div className="relative">
                <Globe className="h-7 w-7" />
                <h2 className="mt-6 font-display text-4xl">Website Building</h2>
                <p className="mt-3 text-primary-foreground/90">
                  Marketing sites, landing pages, brand sites. We build customer-generating machines, not boring digital brochures.
                </p>
                <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">
                  From {symbol}X / project
                </div>
              </div>
            </div>
            <div className="p-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Includes</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Brand & offer positioning",
                  "Copywriting that people actually read",
                  "Custom design (templates are evil)",
                  "Performance & SEO engineering",
                  "Analytics & lead capture",
                  "Integrated CMS that won't make you cry",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="glass-card overflow-hidden rounded-3xl">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="p-10 md:order-2 relative overflow-hidden bg-surface">
              <Code2 className="h-7 w-7 text-primary" />
              <h2 className="mt-6 font-display text-4xl">Custom Web Applications</h2>
              <p className="mt-3 text-muted-foreground">
                Bespoke internal tools, dashboards, client portals, and operational systems. 
                Built perfectly for how you actually work.
              </p>
              <div className="mt-8 text-sm text-muted-foreground">Scoped per project, fixed fee. No surprises.</div>
            </div>
            <div className="p-10">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">What we build</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Admin dashboards & internal tools",
                  "Client portals & member areas",
                  "Booking, payments & automation",
                  "Custom CRMs & lightweight ERPs",
                  "API integrations & data pipelines",
                  "Secure apps with role-based access",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-10 text-center">
            <div className="text-xs uppercase tracking-widest text-primary">Process</div>
            <h2 className="mt-3 font-display text-4xl">How a project runs</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { icon: Search, t: "Discover", d: "Calls, audits, and figuring out what you actually need." },
              { icon: Settings2, t: "Design", d: "Making it look pretty and sound smart." },
              { icon: Wrench, t: "Build", d: "The nerd stuff. Writing the code." },
              { icon: Gauge, t: "Launch", d: "Handing you the keys to your shiny new toy." },
            ].map((s, i) => (
              <div key={s.t} className="glass-card rounded-2xl p-6">
                <s.icon className="h-5 w-5 text-primary" />
                <div className="mt-4 text-xs text-muted-foreground">Step 0{i + 1}</div>
                <div className="mt-1 font-display text-2xl">{s.t}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-5xl">Ready to start?</h2>
        <Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)]">
          Get a quote <ArrowUpRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
