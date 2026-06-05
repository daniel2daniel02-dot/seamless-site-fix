import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Smartphone,
  Search,
  Wrench,
  Check,
  ArrowRight,
  Play,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
  Scissors,
  Utensils,
  Plus,
  Minus,
  ArrowUpRight,
} from "lucide-react";

const features = [
  { icon: Zap, title: "Szybka realizacja", desc: "Strona gotowa w 7–14 dni." },
  { icon: Smartphone, title: "Mobile-first", desc: "Idealna na każdym urządzeniu." },
  { icon: Search, title: "SEO", desc: "Zoptymalizowana pod wyszukiwarki." },
  { icon: Wrench, title: "Wsparcie techniczne", desc: "Jesteśmy z Tobą po uruchomieniu." },
];

const processSteps = [
  { n: 1, icon: ClipboardList, t: "Wycena i brief", d: "Poznajemy Twoje potrzeby i przygotowujemy ofertę." },
  { n: 2, icon: Palette, t: "Projekt i akceptacja", d: "Tworzymy projekt graficzny i czekamy na Twoją zgodę." },
  { n: 3, icon: Code2, t: "Realizacja", d: "Kodujemy stronę i wypełniamy ją treścią." },
  { n: 4, icon: Rocket, t: "Uruchomienie i wsparcie", d: "Publikujemy stronę i wspieramy Cię na bieżąco." },
];

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

const faqs = [
  { q: "Ile trwa realizacja strony?", a: "Standardowo 7–14 dni roboczych od akceptacji projektu i przekazania materiałów." },
  { q: "Co jest potrzebne do rozpoczęcia projektu?", a: "Krótki opis działalności, logo (jeśli jest), zdjęcia lub treści. Resztę pomożemy przygotować." },
  { q: "Czy strona będzie widoczna w Google?", a: "Tak. Każda strona otrzymuje podstawową optymalizację SEO, meta dane i mapę witryny." },
  { q: "Czy mogę samodzielnie edytować treści?", a: "Tak — udostępniamy prosty panel lub wykonujemy aktualizacje w ramach pakietu wsparcia." },
  { q: "Co zawiera pakiet hostingowy?", a: "Hosting, domenę, certyfikat SSL, monitoring oraz pomoc techniczną." },
  { q: "Czy oferujecie faktury VAT?", a: "Tak, wystawiamy faktury VAT za każdą usługę." },
  { q: "Co jeśli nie spodoba mi się projekt?", a: "Wprowadzamy poprawki aż do pełnej akceptacji — to wliczone w cenę." },
];

export default function Home() {
  const [filter, setFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "NordPixel — Profesjonalne strony internetowe dla firm | od 999 zł";
  }, []);

  const visiblePortfolio = portfolio.filter((p) => filter === "all" || p.cat === filter);

  return (
    <div>
      {/* HERO */}
      <section className="bg-[#f1f5fb]">
        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#e2e8f0] text-xs font-semibold text-[#2563eb]">
              Twoja strona. Twój sukces.
            </span>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#0f172a]">
              Profesjonalne strony<br />internetowe dla<br />Twojego biznesu
            </h1>
            <p className="mt-6 text-lg text-[#64748b] max-w-2xl">
              Tworzymy wizytówki i strony dla restauracji, kawiarni, barów, pomocy drogowej i wielu innych — szybko, przystępnie i z pełnym wsparciem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Zamów stronę <ArrowRight className="ml-1 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="pill">
                <a href="#portfolio"><Play className="w-4 h-4" /> Zobacz realizacje</a>
              </Button>
            </div>
            <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              <div><dt className="text-3xl md:text-4xl font-bold text-[#0f172a]">50+</dt><dd className="text-xs text-[#64748b] mt-1">Zrealizowanych projektów</dd></div>
              <div><dt className="text-3xl md:text-4xl font-bold text-[#0f172a]">7–14</dt><dd className="text-xs text-[#64748b] mt-1">Dni do uruchomienia</dd></div>
              <div><dt className="text-3xl md:text-4xl font-bold text-[#0f172a]">100%</dt><dd className="text-xs text-[#64748b] mt-1">Mobile-first</dd></div>
            </dl>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Dlaczego NordPixel</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0f172a]">Dlaczego my?</h2>
            <p className="mt-4 text-[#64748b]">Cztery powody, dla których warto z nami pracować.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg text-[#0f172a]">{f.title}</h3>
                <p className="text-sm text-[#2563eb]/70 mt-2">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-[#f1f5fb]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Proces</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0f172a]">Jak działamy?</h2>
            <p className="mt-4 text-[#64748b]">Cztery proste kroki do Twojej nowej strony.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 max-w-5xl mx-auto">
            {/* connecting line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-[#38bdf8]/40" />
            {processSteps.map((s) => (
              <div key={s.n} className="relative flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#38bdf8]/50 flex items-center justify-center shadow-sm">
                    <s.icon className="w-7 h-7 text-[#2563eb]" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#0f172a] text-white text-xs font-bold flex items-center justify-center">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 font-bold text-[#0f172a]">{s.t}</h3>
                <p className="mt-2 text-sm text-[#64748b] max-w-[200px]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Cennik</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0f172a]">Nasza oferta</h2>
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

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="eyebrow">Portfolio</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0f172a]">Nasze realizacje</h2>
            <p className="mt-4 text-[#64748b]">Zobacz wybrane projekty, które zrealizowaliśmy dla naszych klientów.</p>
          </div>
          <div className="flex justify-center gap-3 mb-10 flex-wrap">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f.id
                    ? "bg-[#0f172a] text-white"
                    : "bg-[#f1f5fb] text-[#0f172a] hover:bg-[#e8f0fb]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {visiblePortfolio.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl bg-white border border-[#e2e8f0] overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1"
              >
                <div className="h-64 bg-gradient-to-br from-[#e8f0fb] to-[#dbeafe] flex items-center justify-center">
                  <p.Icon className="w-24 h-24 text-[#0f172a]" strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#e8f0fb] text-[#2563eb] text-xs font-semibold">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-[#0f172a]">{p.title}</h3>
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

      {/* FAQ */}
      <section id="faq" className="py-20 md:py-28 bg-[#f1f5fb]">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0f172a]">Najczęściej zadawane pytania</h2>
            <p className="mt-4 text-[#64748b]">Masz pytanie? Pewnie znajdziesz tu odpowiedź.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-[var(--shadow-card)] border border-[#e2e8f0] overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-bold text-[#0f172a]">{f.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 ${
                        isOpen ? "bg-[#2563eb] text-white" : "bg-[#e8f0fb] text-[#2563eb]"
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-[#64748b]">{f.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
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
            ? "bg-[#0f172a] text-white border border-[#0f172a] shadow-[var(--shadow-elegant)] md:scale-[1.03]"
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
        <h3 className={`mt-6 text-2xl font-bold ${highlight ? "text-white" : "text-[#0f172a]"}`}>
          {title}
        </h3>
        <p className="mt-6 flex items-baseline gap-2">
          <span className={`text-5xl font-bold ${highlight ? "text-white" : "text-[#0f172a]"}`}>{price}</span>
          {period && (
            <span className={`text-sm ${highlight ? "text-white/70" : "text-[#64748b]"}`}>{period}</span>
          )}
        </p>
        <ul className="mt-8 space-y-3 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3 text-sm">
              <span
                className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                  highlight ? "bg-[#38bdf8] text-[#0f172a]" : "bg-[#2563eb] text-white"
                }`}
              >
                <Check className="w-3 h-3" strokeWidth={3} />
              </span>
              <span className={highlight ? "text-white/90" : "text-[#0f172a]"}>{f}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className={`mt-8 inline-flex items-center justify-center h-12 rounded-full font-semibold transition-all ${
            highlight
              ? "bg-white text-[#0f172a] hover:bg-white/90"
              : "bg-[#0f172a] text-white hover:bg-[#1e293b]"
          }`}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
