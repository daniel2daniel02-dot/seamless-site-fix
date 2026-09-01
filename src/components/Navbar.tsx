import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Cloud, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Start", end: true },
  { to: "/oferta", label: "Oferta" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/faq", label: "FAQ" },
  { to: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e2e8f0]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-[#0d1c2e]">
          <Cloud className="w-6 h-6 text-[#2563eb]" />
          NordPixel
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-[#2563eb]" : "text-[#0d1c2e] hover:text-[#2563eb]"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-[#e2e8f0] text-xs font-semibold text-[#0d1c2e]">
            <span className="text-[#2563eb] text-[10px]">PL</span> PL
          </span>
          <Button asChild variant="navy" size="default">
            <Link to="/kontakt">Bezpłatna wycena</Link>
          </Button>
        </div>
        <button
          className="md:hidden -mr-2 p-2 rounded-lg text-[#0d1c2e] hover:bg-[#f1f5fb] transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-[#e2e8f0] px-4 py-2 flex flex-col text-base font-medium bg-white max-h-[calc(100dvh-4rem)] overflow-y-auto">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-3 border-b border-[#f1f5fb] transition-colors ${
                  isActive ? "text-[#2563eb]" : "text-[#0d1c2e] hover:text-[#2563eb]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild variant="navy" className="my-4 w-full">
            <Link to="/kontakt" onClick={() => setOpen(false)}>
              Bezpłatna wycena
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
