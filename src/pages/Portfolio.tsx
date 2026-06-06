import { useEffect, useState } from "react";
import { Scissors, Utensils, ArrowUpRight } from "lucide-react";

const portfolio = [
  {
    tag: "Fryzjer",
    cat: "uslugi",
    title: "Salon Fryzjerski",
    desc: "Nowoczesna strona dla salonu fryzjerskiego.",
    href: "https://stronatestowa2nordpixel.vercel.app/",
    Icon: Scissors,
  },
  {
    tag: "Restauracja",
    cat: "restauracje",
    title: "Restauracja",
    desc: "Elegancka strona dla restauracji.",
    href: "https://stronatestowa1nordpixel.vercel.app/",
    Icon: Utensils,
  },
];

const filters = [
  { id: "all", label: "Wszystkie" },
  { id: "restauracje", label: "Restauracje" },
  { id: "uslugi", label: "Usługi" },
  { id: "inne", label: "Inne" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.title = "Portfolio — NordPixel";
  }, []);

  const visible = portfolio.filter((p) => filter === "all" || p.cat === filter);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#0d1c2e]">Nasze realizacje</h1>
          <p className="mt-4 text-[#64748b]">Zobacz wybrane projekty, które zrealizowaliśmy dla naszych klientów.</p>
        </div>
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === f.id
                  ? "bg-[#0d1c2e] text-white"
                  : "bg-[#f1f5fb] text-[#0d1c2e] hover:bg-[#e8f0fb]"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {visible.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white border border-[#e2e8f0] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
            >
              <div className="h-64 bg-gradient-to-br from-[#e8f0fb] to-[#dbeafe] flex items-center justify-center">
                <p.Icon className="w-24 h-24 text-[#0d1c2e]" strokeWidth={1.5} />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full bg-[#e8f0fb] text-[#2563eb] text-xs font-semibold">
                  {p.tag}
                </span>
                <h3 className="mt-3 text-xl font-bold text-[#0d1c2e]">{p.title}</h3>
                <p className="text-sm text-[#64748b] mt-2">{p.desc}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2563eb] hover:gap-2 transition-all"
                >
                  Zobacz stronę <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
