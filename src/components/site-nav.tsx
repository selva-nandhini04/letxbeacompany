import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { LogoInline } from "./logo-inline";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        {/* Logo — font size drives the logo image size via LogoInline */}
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center shrink-0">
          <span className="font-display text-xl tracking-tight">
            let<LogoInline />be a company
          </span>
        </Link>

        {/* Desktop nav pill */}
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-surface-elevated/60 px-2 py-1.5 backdrop-blur md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-1.5 text-sm bg-accent text-foreground font-medium" }}
              activeOptions={l.to === "/" ? { exact: true } : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/contact"
            className="hidden h-10 items-center gap-1.5 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.02] sm:inline-flex"
          >
            Start a project <ArrowUpRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:bg-accent md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 flex flex-col bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 pt-6 pb-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="flex items-center rounded-2xl px-4 py-4 text-lg font-medium text-foreground transition-colors hover:bg-accent"
                activeProps={{ className: "flex items-center rounded-2xl px-4 py-4 text-lg font-medium bg-primary/10 text-primary" }}
                activeOptions={l.to === "/" ? { exact: true } : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pt-2 pb-8">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary text-base font-medium text-primary-foreground shadow-[var(--shadow-elegant)]"
            >
              Start a project <ArrowUpRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
