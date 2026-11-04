import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useQuote } from "@/lib/quote-store";

const links = [
  { href: "#metiers", label: "Métiers" },
  { href: "#secteurs", label: "Secteurs" },
  { href: "#equipements", label: "Équipements" },
  { href: "#methode", label: "Méthode" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const count = useQuote((state) => state.lines.length);

  useEffect(() => {
    void useQuote.persist.rehydrate();
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const badge = mounted ? count : 0;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-line bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#accueil" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center border border-brass font-display text-lg font-semibold leading-none text-brass">
            DZ
          </span>
          <span className="leading-none">
            <span className="block font-display text-xl font-semibold tracking-wide text-cream">
              DzInduServ
            </span>
            <span className="block text-xs text-mist">Industrie · Algérie</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Sections">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-11 items-center gap-2 bg-brass px-4 text-sm font-semibold text-ink transition-colors hover:bg-brass-deep sm:inline-flex"
          >
            Dossier de devis
            {badge > 0 ? (
              <span className="grid size-5 place-items-center bg-ink font-display text-xs text-brass">
                {badge}
              </span>
            ) : null}
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center border border-line text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Fermer le menu" : "Ouvrir le menu"}</span>
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          className="border-t border-line bg-ink px-5 py-4 lg:hidden"
          aria-label="Sections"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex min-h-11 items-center border-b border-line font-display text-2xl text-cream"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-4 flex min-h-11 items-center justify-center bg-brass font-semibold text-ink"
                onClick={() => setOpen(false)}
              >
                Dossier de devis{badge > 0 ? ` (${badge})` : ""}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
