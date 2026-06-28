import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="font-display text-2xl tracking-tight">
              let <em className="text-gradient not-italic">x</em> be a company
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              Websites and web apps engineered as customer-generating engines.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link>
            <Link to="/work" className="text-muted-foreground hover:text-foreground">Work</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Let x be. All rights reserved.</span>
          <span>Crafted with intent.</span>
        </div>
      </div>
    </footer>
  );
}
