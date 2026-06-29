import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, PenTool, Layers, Gauge, Code2, Search, Wrench, CheckCircle2, Quote } from "lucide-react";
import logoWhite from "../assets/2.png";
import { Logo3D } from "../components/logo-3d";
import { LogoInline } from "../components/logo-inline";
import { useCurrency } from "../lib/use-currency";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Let x be: Radically affordable premium websites" },
      { name: "description", content: "We build gorgeous websites and custom web apps that actually bring in customers. Because cheap looking sites are for amateurs." },
      { property: "og:title", content: "Let x be: Radically affordable premium websites" },
      { property: "og:description", content: "Websites and web apps engineered as customer-generating engines." },
    ],
  }),
  component: Home,
});

function Home() {
  const { symbol } = useCurrency();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 grid-texture opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated/60 px-4 py-1.5 text-xs font-medium backdrop-blur">

            Websites & web apps that don't cost a kidney
          </div>
          <h1 className="mx-auto mt-8 max-w-4xl font-display text-4xl leading-[1.05] sm:text-6xl md:text-8xl">
            Let<LogoInline />be your
            <br />
            secret weapon.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            We build premium websites and custom web apps that do more than just look pretty. 
            They sit quietly in the background and ruthlessly generate customers for you.
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
            Affordable does not mean ugly. It means <em className="text-gradient not-italic">we know what we are doing</em>.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            {["Nerdy", "Strategic", "Fast"].map((t) => (
              <span key={t} className="rounded-full border border-border px-3 py-1 text-muted-foreground">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES BENTO */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="mb-12 text-center">
          <div className="text-xs uppercase tracking-widest text-primary">Services</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Stuff we actually build</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-[auto_auto]">
          {/* tall left */}
          <div className="glass-card rounded-3xl p-7 md:row-span-2">
            <Layers className="h-6 w-6 text-primary" />
            <h3 className="mt-6 font-display text-3xl leading-tight">
              Brands that punch above their weight
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              We never use templates. Everything we touch is designed to trick people into thinking you have a 50-person marketing team.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-background/40 p-4">
              <div className="font-display text-2xl">From {symbol}X<span className="text-sm text-muted-foreground">/project</span></div>
              <div className="mt-1 text-xs text-muted-foreground">No sneaky retainer traps. Just honest pricing.</div>
            </div>
          </div>

          {/* big center */}
          <div className="glass-card relative overflow-hidden rounded-3xl p-8 sm:col-span-2 md:col-span-2 md:row-span-2">
            <div className="absolute inset-0 bg-[image:var(--gradient-primary)] opacity-90" />
            <div className="absolute inset-0 grid-texture opacity-20" />
            <div className="relative flex h-full flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur">
                Let<LogoInline variant="white" />be
              </div>
              <h3 className="mt-6 font-display text-4xl text-primary-foreground sm:text-5xl md:text-6xl">
                Your customer<br />generating robot
              </h3>
              <div className="relative mt-6 flex flex-1 items-center justify-center p-4 w-full min-h-[280px] sm:min-h-[380px] md:min-h-[450px]">
                <Logo3D />
              </div>
            </div>
          </div>

          {/* right top */}
          <div className="glass-card rounded-3xl p-6">
            <div className="flex h-12 items-center justify-between rounded-full bg-background/60 px-2">
              <span className="ml-3 text-xs font-medium">SEO baked right in</span>
              <div className="grid h-9 w-9 place-items-center rounded-full bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Search className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Google will love you. We make sure every page is impossible to ignore.
            </p>
          </div>

          {/* right middle */}
          <div className="glass-card rounded-3xl p-6">
            <div className="font-display text-5xl text-gradient">3wk</div>
            <div className="mt-1 text-sm font-medium">average delivery</div>
            <div className="mt-3 text-xs text-muted-foreground">From a silly idea to a live site, lightning fast.</div>
          </div>

          {/* bottom row: web apps */}
          <div className="glass-card rounded-3xl p-7">
            <Code2 className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-2xl">Custom web apps</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Dashboards and portals that actually make sense, unlike your current spreadsheet nightmare.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-7 sm:col-span-2 md:col-span-2">
            <Gauge className="h-6 w-6 text-primary" />
            <h3 className="mt-4 font-display text-2xl">Integrated everything</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Leads, content, bookings, and payments all in one spot. Say goodbye to opening 14 tabs just to do your job.
            </p>
          </div>

          <div className="glass-card relative overflow-hidden rounded-3xl p-7">
            <div className="absolute inset-0 bg-[image:var(--gradient-glow)] opacity-60" />
            <div className="relative">
              <div className="text-xs text-muted-foreground">Ready when you are, chief</div>
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
            <div className="text-xs uppercase tracking-widest text-primary">Our Process</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">How we make you look cool</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Search, n: "01", t: "Mind Reading", d: "We poke around your brain to figure out what you actually want to sell." },
              { icon: PenTool, n: "02", t: "Wordsmithing", d: "We write things that sound smart, so people actually want to buy from you." },
              { icon: Wrench, n: "03", t: "Nerd Stuff", d: "We build it super fast and perfectly optimized. You do not even have to know what HTML means." },
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

      {/* AFFORDABLE != AMATEUR */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div className="text-xs uppercase tracking-widest text-primary">Our whole deal</div>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Affordable <em className="text-gradient not-italic">does not equal</em> amateur.
            </h2>
            <p className="mt-6 text-muted-foreground">
              We charge reasonable prices because we are insanely efficient, not because we cut corners. 
              We don't have a fancy office with a ping pong table, so you don't have to pay for one. You just pay for a great website.
            </p>
          </div>
          <div className="space-y-3">
            {[
              "Actual experts building your site, not some intern named Chad",
              "We write the words too, because bad copy ruins good design",
              "Built to make you money, not just to look pretty on our Instagram",
              "You own everything from day one, no weird hostage situations",
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
            "They didn't just build a website. They basically handed us a money-printing machine."
          </p>
          <div className="mt-6 text-sm text-muted-foreground">Some Founder, probably</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-widest text-primary">FAQ</div>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Things you might ask</h2>
        </div>
        <div className="space-y-3">
          {[
            { q: "How are you affordable but still amazing?", a: "We have a lean team and zero middle management. You are paying for the work, not a CEO's third vacation." },
            { q: "How long does this magic take?", a: "Most normal sites are done in 2 to 4 weeks. If you want a crazy custom web app, we will figure it out together." },
            { q: "Do I actually own the site?", a: "Yep. Code, domains, all of it. We are builders, not villains trying to hold your site hostage." },
            { q: "Do you write the words too?", a: "Absolutely. A beautiful site with terrible words is a tragedy." },
            { q: "Can you build wild custom apps?", a: "Oh yeah. Dashboards, portals, whatever weird internal tool you are dreaming of." },
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
            Let<LogoInline />= a great decision.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Drop us a line about your project. We promise we are nice and our pricing is totally transparent.
          </p>
          <Link to="/contact" className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)]">
            Let's do this <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
