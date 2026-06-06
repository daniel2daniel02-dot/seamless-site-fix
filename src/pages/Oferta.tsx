import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export default function Oferta() {
  useEffect(() => {
    document.title = "Oferta — NordPixel";
  }, []);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow">Cennik</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#0d1c2e]">Nasza oferta</h1>
          <p className="mt-4 text-[#64748b]">Przejrzyste pakiety dopasowane do Twoich potrzeb.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start max-w-6xl mx-auto">
          <PriceCard
            tag="JEDNORAZOWO"
            title="Strona internetowa"
            price="999 zł"
            features={[
              "Projekt graficzny",
              "Responsywność (mobile/tablet/desktop)",
              "Optymalizacja SEO",
              "Mapa Google Maps",
              "Certyfikat SSL",
              "Czas realizacji 7–14 dni",
            ]}
            cta="Zamów teraz"
          />
          <PriceCard
            tag="PRZY ZAKUPIE STRONY OD NAS"
            title="Hosting + Domena + Wsparcie"
            price="49 zł"
            period="/ miesiąc"
            badge="NAJPOPULARNIEJSZY"
            features={[
              "Hosting strony",
              "Własna domena",
              "Certyfikat SSL w cenie",
              "Pomoc techniczna 7 dni w tygodniu",
              "Aktualizacje treści w ciągu 72h",
              "Monitoring dostępności strony",
            ]}
            cta="Wybierz plan"
            highlight
          />
          <PriceCard
            tag="DLA WŁASNEJ STRONY"
            title="Hosting + Domena + Wsparcie"
            price="69 zł"
            period="/ miesiąc"
            features={[
              "Hosting strony",
              "Własna domena",
              "Certyfikat SSL w cenie",
              "Pomoc techniczna 7 dni w tygodniu",
              "Aktualizacje treści w ciągu 72h",
              "Monitoring dostępności strony",
            ]}
            cta="Wybierz plan"
          />
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  tag,
  title,
  price,
  period,
  badge,
  features,
  cta,
  highlight,
}: {
  tag: string;
  title: string;
  price: string;
  period?: string;
  badge?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}) {
  return (
    <div className="relative">
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-5 py-1.5 rounded-full text-xs font-bold text-white bg-[image:var(--gradient-cta)] shadow-md whitespace-nowrap">
            {badge}
          </span>
        </div>
      )}
      <div
        className={`p-8 rounded-2xl flex flex-col h-full ${
          highlight
            ? "bg-[#0d1c2e] text-white border border-[#0d1c2e] shadow-[var(--shadow-elegant)] md:scale-[1.03]"
            : "bg-white border border-[#e2e8f0] shadow-[var(--shadow-card)]"
        }`}
      >
        <span
          className={`inline-block self-start px-3 py-1 rounded-full text-[10px] font-bold tracking-wider ${
            highlight ? "bg-white/10 text-[#38bdf8]" : "bg-[#e8f0fb] text-[#2563eb]"
          }`}
        >
          {tag}
        </span>
        <h3 className={`mt-6 text-2xl font-bold ${highlight ? "text-white" : "text-[#0d1c2e]"}`}>
          {title}
        </h3>
        <p className="mt-6 flex items-baseline gap-2">
          <span className={`text-5xl font-bold ${highlight ? "text-white" : "text-[#0d1c2e]"}`}>{price}</span>
          {period && (
            <span className={`text-sm ${highlight ? "text-white/70" : "text-[#64748b]"}`}>{period}</span>
          )}
        </p>
        <ul className="mt-8 space-y-3 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <span
                className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  highlight ? "bg-[#38bdf8] text-[#0d1c2e]" : "bg-[#2563eb] text-white"
                }`}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className={highlight ? "text-white/90" : "text-[#0d1c2e]"}>{f}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/kontakt"
          className={`mt-8 inline-flex items-center justify-center h-12 rounded-full font-semibold transition-all ${
            highlight
              ? "bg-white text-[#0d1c2e] hover:bg-white/90"
              : "bg-[#0d1c2e] text-white hover:bg-[#122540]"
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
