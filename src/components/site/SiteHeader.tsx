import { useState } from "react";
import { Mail, MapPin, Menu, X } from "lucide-react";

import svlLogo from "@/assets/svl-logo.png";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#industries", label: "Industries" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-steel text-steel-foreground/75">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-2 text-xs tracking-wide">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Patancheru, Hyderabad, India
          </span>
          <a
            href="mailto:admin@svlindustries.com"
            className="inline-flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="h-3.5 w-3.5 text-primary" />
            admin@svlindustries.com
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={svlLogo}
              alt="SVL Industries logo"
              width={816}
              height={816}
              className="h-10 w-10 object-contain"
            />
            <span className="font-display text-xl font-bold tracking-widest">SVL INDUSTRIES</span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-display text-[0.8rem] tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-sm bg-primary px-5 py-2 font-display text-sm tracking-widest text-primary-foreground transition-opacity hover:opacity-90 sm:inline-block"
            >
              Get a Quote
            </a>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpen((v) => !v)}
              className="rounded-sm border border-border p-2 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-border bg-background lg:hidden">
            <div className="mx-auto flex max-w-6xl flex-col px-6 py-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 font-display text-sm tracking-widest text-muted-foreground last:border-0 hover:text-primary"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
