import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Cloud, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Strona główna", end: true },
  { to: "/about", label: "O nas" },
  { to: "/contact", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg">
          <Cloud className="w-6 h-6 text-primary" />
          NordPixel
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-primary" : "hover:text-primary"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="hero">
            <Link to="/contact">Bezpłatna wycena</Link>
          </Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border px-4 py-4 flex flex-col gap-4 text-sm font-medium bg-background">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-primary" : ""
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Button asChild variant="hero">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Bezpłatna wycena
            </Link>
          </Button>
        </nav>
      )}
    </header>
  );
}
