import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Let x be" },
      { name: "description", content: "Tell us about your project. We'll come back with a tight plan and an honest price." },
      { property: "og:title", content: "Contact — Let x be" },
      { property: "og:description", content: "Start a project with Let x be." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Project type: ${data.get("type")}%0DBudget: ${data.get("budget")}%0D%0D${data.get("message")}`;
    window.location.href = `mailto:hello@letxbe.com?subject=Project enquiry from ${data.get("name")}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="relative mx-auto max-w-4xl px-6 pt-20 pb-12 text-center">
          <div className="text-xs uppercase tracking-widest text-primary">— Contact —</div>
          <h1 className="mt-4 font-display text-5xl sm:text-7xl">
            Let's build the <em className="text-gradient not-italic">x</em>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Tell us a bit about your project. We reply within one business day.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-[1fr_320px]">
          <form onSubmit={onSubmit} className="glass-card rounded-3xl p-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField label="Project type" name="type" options={["Website", "Web application", "Both", "Not sure yet"]} />
              <SelectField label="Budget range" name="budget" options={["< $2k", "$2k – $5k", "$5k – $15k", "$15k+"]} />
            </div>
            <div>
              <label className="text-sm font-medium">Tell us about your project</label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="What are you building? Who's it for?"
              />
            </div>
            <button
              type="submit"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)]"
            >
              {sent ? <><Check className="h-4 w-4" /> Sent</> : <>Send enquiry <ArrowUpRight className="h-4 w-4" /></>}
            </button>
          </form>

          <aside className="space-y-4">
            <div className="glass-card rounded-3xl p-6">
              <Mail className="h-5 w-5 text-primary" />
              <div className="mt-3 text-sm text-muted-foreground">Prefer email?</div>
              <a href="mailto:hello@letxbe.com" className="mt-1 block font-display text-xl hover:text-primary">
                hello@letxbe.com
              </a>
            </div>
            <div className="glass-card rounded-3xl p-6">
              <div className="text-sm font-medium">What happens next</div>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>1. We read your brief carefully.</li>
                <li>2. Quick 20-min call to align.</li>
                <li>3. A tight plan + fixed quote within 48h.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select
        name={name}
        className="mt-2 w-full rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
