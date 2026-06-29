import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LogoInline } from "../components/logo-inline";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About: Let x be" },
      { name: "description", content: "A tiny studio building premium websites and web apps at surprisingly normal prices." },
      { property: "og:title", content: "About: Let x be" },
      { property: "og:description", content: "Why we exist, how we work, and why we don't have ping pong tables." },
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
          <div className="text-xs uppercase tracking-widest text-primary">About Us</div>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl">
            Let<LogoInline />= the folks
            <br />building your site.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-16">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            Most agencies sell you billable hours. Most freelancers sell you headaches.
            We sell you the only thing that actually matters, which is a website
            or web app that quietly turns random internet strangers into paying customers.
          </p>
          <p>
            We are intentionally small. You only talk to seniors, and there is zero middle management bloat.
            That is the big secret to how we price things fairly without delivering cheap-looking garbage.
          </p>
          <p>
            We believe your website is your hardest-working employee.
            So we engineer it that way: crystal clear messaging, sharp design, lightning-fast
            code, and all the back-office plumbing it needs so you can just relax.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { n: "01", t: "No Juniors", d: "No awkward handoffs to an intern. The people you talk to are the nerds who actually build it." },
            { n: "02", t: "Words Matter", d: "We write the strategy into the structure. Copy and design happen together because making it pretty doesn't fix a bad idea." },
            { n: "03", t: "Honest Pricing", d: "Fixed fees, tightly scoped. No retainers, no mystery invoices, no crying over budget overruns." },
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
          <h2 className="font-display text-4xl sm:text-5xl">Let's do something awesome</h2>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)]">
            Get in touch <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
