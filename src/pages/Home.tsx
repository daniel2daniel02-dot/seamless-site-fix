import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Smartphone,
  Search,
  Wrench,
  ArrowRight,
  Play,
  ClipboardList,
  Palette,
  Code2,
  Rocket,
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

export default function Home() {
  useEffect(() => {
    document.title = "NordPixel — Profesjonalne strony internetowe dla firm | od 999 zł";
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#e8f0fb] via-[#f1f5fb] to-[#dbeafe]">
        <div className="container mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-[#e2e8f0] text-xs font-semibold text-[#2563eb]">
              Twoja strona. Twój sukces.
            </span>
            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-[#0d1f3c]">
              Profesjonalne strony internetowe dla Twojego biznesu
            </h1>
            <p className="mt-6 text-lg text-[#64748b] max-w-xl">
              Tworzymy wizytówki i strony dla restauracji, kawiarni, barów, pomocy drogowej i wielu innych — szybko, przystępnie i z pełnym wsparciem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gradient">
                <Link to="/kontakt">Zamów stronę <ArrowRight className="ml-1 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="pill">
                <Link to="/portfolio"><Play className="w-4 h-4" /> Zobacz realizacje</Link>
              </Button>
            </div>
            <dl className="mt-14 grid grid-cols-3 gap-8 max-w-lg">
              <div><dt className="text-3xl md:text-4xl font-bold text-[#0d1f3c]">50+</dt><dd className="text-xs text-[#64748b] mt-1">Zrealizowanych projektów</dd></div>
              <div><dt className="text-3xl md:text-4xl font-bold text-[#2563eb]">7–14</dt><dd className="text-xs text-[#64748b] mt-1">Dni do uruchomienia</dd></div>
              <div><dt className="text-3xl md:text-4xl font-bold text-[#2563eb]">100%</dt><dd className="text-xs text-[#64748b] mt-1">Mobile-first</dd></div>
            </dl>
          </div>

          {/* Right column: phone + browser illustration */}
          <div className="relative hidden lg:block h-[520px]">
            <div className="absolute top-4 right-4 z-20 bg-white rounded-2xl px-5 py-3 shadow-[var(--shadow-elegant)] border border-[#e2e8f0]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#2563eb]">Lighthouse</p>
              <p className="text-3xl font-bold text-[#0d1f3c]">98<span className="text-sm text-[#64748b]">/100</span></p>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] h-[240px] rounded-2xl bg-white border border-[#e2e8f0] shadow-[0_30px_60px_-20px_rgba(37,99,235,0.25)] overflow-hidden">
              <div className="h-7 bg-[#f1f5fb] border-b border-[#e2e8f0] flex items-center gap-1.5 px-3">
                <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
                <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              </div>
              <div className="p-4 space-y-2">
                <div className="h-3 w-2/3 rounded bg-gradient-to-r from-[#2563eb] to-[#38bdf8]" />
                <div className="h-2 w-full rounded bg-[#e2e8f0]" />
                <div className="h-2 w-5/6 rounded bg-[#e2e8f0]" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-16 rounded-lg bg-gradient-to-br from-[#e8f0fb] to-[#dbeafe]" />
                  <div className="h-16 rounded-lg bg-gradient-to-br from-[#e8f0fb] to-[#dbeafe]" />
                  <div className="h-16 rounded-lg bg-gradient-to-br from-[#e8f0fb] to-[#dbeafe]" />
                </div>
              </div>
            </div>

            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-[200px] h-[400px] rounded-[2.5rem] bg-gradient-to-br from-[#0d1f3c] to-[#1e293b] p-2.5 shadow-[0_40px_80px_-20px_rgba(13,31,60,0.45)] rotate-[-6deg]">
              <div className="w-full h-full rounded-[2rem] bg-gradient-to-br from-[#dbeafe] via-[#e8f0fb] to-white relative overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 rounded-full bg-[#0d1f3c]" />
                <div className="p-4 pt-8 space-y-2">
                  <div className="h-2 w-1/2 rounded bg-[#2563eb]" />
                  <div className="h-3 w-full rounded bg-[#0d1f3c]/80" />
                  <div className="h-3 w-4/5 rounded bg-[#0d1f3c]/80" />
                  <div className="mt-4 h-20 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#38bdf8]" />
                  <div className="mt-3 space-y-1.5">
                    <div className="h-2 w-full rounded bg-[#e2e8f0]" />
                    <div className="h-2 w-3/4 rounded bg-[#e2e8f0]" />
                  </div>
                  <div className="mt-3 h-8 rounded-full bg-[#0d1f3c]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow">Dlaczego NordPixel</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0d1f3c]">Dlaczego my?</h2>
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
                <h3 className="font-bold text-lg text-[#0d1f3c]">{f.title}</h3>
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
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#0d1f3c]">Jak działamy?</h2>
            <p className="mt-4 text-[#64748b]">Cztery proste kroki do Twojej nowej strony.</p>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px bg-[#38bdf8]/40" />
            {processSteps.map((s) => (
              <div key={s.n} className="relative flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-white border-2 border-[#38bdf8]/50 flex items-center justify-center shadow-sm">
                    <s.icon className="w-7 h-7 text-[#2563eb]" />
                  </div>
                  <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#0d1f3c] text-white text-xs font-bold flex items-center justify-center">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 font-bold text-[#0d1f3c]">{s.t}</h3>
                <p className="mt-2 text-sm text-[#64748b] max-w-[200px]">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
