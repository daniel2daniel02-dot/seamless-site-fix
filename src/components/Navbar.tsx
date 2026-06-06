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
          className="md:hidden text-[#0d1c2e]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-[#e2e8f0] px-4 py-4 flex flex-col gap-4 text-sm font-medium bg-white">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "text-[#2563eb]" : "text-[#0d1c2e]")}
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild variant="navy">
            <Link to="/kontakt" onClick={() => setOpen(false)}>
              Bezpłatna wycena
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
