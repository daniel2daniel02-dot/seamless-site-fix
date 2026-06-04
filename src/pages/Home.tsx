import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Zap, Smartphone, Search, Headphones, Check, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-devices.png";

const features = [
  { icon: Zap, title: "Szybka realizacja", desc: "Twoja strona online w 7–14 dni roboczych." },
  { icon: Smartphone, title: "Mobile-first", desc: "Wygląda świetnie na telefonie, tablecie i komputerze." },
  { icon: Search, title: "SEO w standardzie", desc: "Zoptymalizowana, by klienci znajdowali Cię w Google." },
  { icon: Headphones, title: "Wsparcie 7/7", desc: "Pomagamy także po uruchomieniu strony." },
];

const portfolio = [
  { tag: "Fryzjer", title: "Salon Fryzjerski", desc: "Nowoczesna strona dla salonu fryzjerskiego.", href: "https://stronatestowa2nordpixel.vercel.app/" },
  { tag: "Restauracja", title: "Restauracja", desc: "Elegancka strona dla lokalu gastronomicznego.", href: "https://stronatestowa1nordpixel.vercel.app/" },
];

const processSteps = [
  { n: "1", t: "Wycena i brief", d: "Poznajemy Twoje cele i przygotowujemy ofertę." },
  { n: "2", t: "Projekt i akceptacja", d: "Tworzymy makietę i czekamy na Twoją zgodę." },
  { n: "3", t: "Realizacja", d: "Kodujemy stronę i wypełniamy ją treścią." },
  { n: "4", t: "Uruchomienie", d: "Publikujemy stronę i wspieramy Cię na bieżąco." },
];

const testimonials = [
  { q: "Strona gotowa w 10 dni, świetna obsługa i pełne wsparcie. Polecam!", a: "Anna K.", r: "Restauracja" },
  { q: "Telefon dzwoni dwa razy częściej. Inwestycja zwróciła się w miesiąc.", a: "Marcin N.", r: "Pomoc drogowa" },
  { q: "Profesjonalnie, szybko i przystępnie cenowo. Dokładnie tak, jak chciałam.", a: "Katarzyna W.", r: "Kawiarnia" },
];

const faqs = [
  { q: "Ile trwa realizacja strony?", a: "Standardowo 7–14 dni roboczych od akceptacji projektu i przekazania materiałów." },
  { q: "Co jest potrzebne do rozpoczęcia projektu?", a: "Krótki opis działalności, logo (jeśli jest), zdjęcia lub treści. Resztę pomożemy przygotować." },
  { q: "Czy strona będzie widoczna w Google?", a: "Tak. Każda strona otrzymuje podstawową optymalizację SEO, meta dane i mapę witryny." },
  { q: "Czy mogę samodzielnie edytować treści?", a: "Tak — udostępniamy prosty panel lub wykonujemy aktualizacje w ramach pakietu wsparcia." },
  { q: "Co zawiera pakiet hostingowy?", a: "Hosting, domenę, certyfikat SSL, monitoring oraz pomoc techniczną." },
  { q: "Czy oferujecie faktury VAT?", a: "Tak, wystawiamy faktury VAT za każdą usługę." },
];

export default function Home() {
  useEffect(() => {
    document.title = "NordPixel — Profesjonalne strony internetowe dla firm | od 999 zł";
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="container mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="bg-background/70 mb-6">Twoja strona. Twój sukces.</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Profesjonalne strony internetowe dla Twojego biznesu
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Tworzymy wizytówki i strony dla restauracji, kawiarni, barów, pomocy drogowej i wielu innych — szybko, przystępnie i z pełnym wsparciem.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero">
                <Link to="/contact">Zamów stronę <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#portfolio">Zobacz realizacje</a>
              </Button>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              <div><dt className="text-3xl font-bold text-primary">50+</dt><dd className="text-xs text-muted-foreground mt-1">Zrealizowanych projektów</dd></div>
              <div><dt className="text-3xl font-bold text-primary">7–14</dt><dd className="text-xs text-muted-foreground mt-1">Dni do uruchomienia</dd></div>
              <div><dt className="text-3xl font-bold text-primary">100%</dt><dd className="text-xs text-muted-foreground mt-1">Mobile-first</dd></div>
            </dl>
          </div>
          <div className="relative">
            <img src={heroImage} alt="Strona internetowa na telefonie i komputerze" width={1024} height={1024} className="w-full max-w-lg mx-auto drop-shadow-2xl" />
            <Card className="absolute top-4 right-0 md:right-8 px-4 py-3 shadow-[var(--shadow-elegant)]">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Lighthouse</p>
              <p className="text-2xl font-bold text-primary">98<span className="text-sm text-muted-foreground">/100</span></p>
            </Card>
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">Dlaczego NordPixel</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Dlaczego my?</h2>
            <p className="mt-3 text-muted-foreground">Cztery powody, dla których warto z nami pracować.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <Card key={f.title} className="p-6 hover:shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">Cennik</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Nasza oferta</h2>
            <p className="mt-3 text-muted-foreground">Przejrzyste pakiety dopasowane do Twoich potrzeb.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <PriceCard tag="Jednorazowo" title="Strona internetowa" price="999 zł" features={["Projekt graficzny", "Responsywność", "Optymalizacja SEO", "Mapa Google Maps", "Certyfikat SSL", "Realizacja 7–14 dni"]} cta="Zamów teraz" />
            <PriceCard tag="Najpopularniejszy" title="Hosting + Domena + Wsparcie" price="49 zł" period="/miesiąc" subtitle="Przy zakupie strony od nas" highlight features={["Hosting strony", "Własna domena", "Certyfikat SSL w cenie", "Pomoc techniczna 7 dni w tygodniu", "Aktualizacje treści w 72h", "Monitoring dostępności"]} cta="Wybierz plan" />
            <PriceCard tag="Dla własnej strony" title="Hosting + Domena + Wsparcie" price="69 zł" period="/miesiąc" features={["Hosting strony", "Własna domena", "Certyfikat SSL w cenie", "Pomoc techniczna 7 dni w tygodniu", "Aktualizacje treści w 72h", "Monitoring dostępności"]} cta="Wybierz plan" />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">Portfolio</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Nasze realizacje</h2>
            <p className="mt-3 text-muted-foreground">Zobacz wybrane projekty, które zrealizowaliśmy dla naszych klientów.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {portfolio.map((p) => (
              <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer" className="group">
                <Card className="p-8 h-full hover:shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-1">
                  <Badge className="mb-4">{p.tag}</Badge>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{p.desc}</p>
                  <span className="mt-6 inline-flex items-center text-sm font-medium text-primary group-hover:gap-3 gap-2 transition-all">
                    Zobacz stronę <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">Proces</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Jak działamy?</h2>
            <p className="mt-3 text-muted-foreground">Cztery proste kroki do Twojej nowej strony.</p>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s) => (
              <li key={s.n}>
                <Card className="p-6 h-full">
                  <div className="w-10 h-10 rounded-full text-primary-foreground font-bold flex items-center justify-center mb-4" style={{ background: "var(--gradient-primary)" }}>
                    {s.n}
                  </div>
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
                </Card>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">Opinie</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Co mówią nasi klienci?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.a} className="p-6">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-foreground">&ldquo;{t.q}&rdquo;</p>
                <footer className="mt-4 pt-4 border-t border-border">
                  <p className="font-medium">{t.a}</p>
                  <p className="text-xs text-muted-foreground">{t.r}</p>
                </footer>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Najczęściej zadawane pytania</h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`i${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">Gotowy na nową stronę?</h2>
          <p className="mt-3 text-muted-foreground">Wypełnij formularz — wrócimy do Ciebie w 24 godziny.</p>
          <Button asChild size="lg" variant="hero" className="mt-8">
            <Link to="/contact">Bezpłatna wycena <ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

function PriceCard({ tag, title, price, period, subtitle, features, cta, highlight }: {
  tag: string; title: string; price: string; period?: string; subtitle?: string; features: string[]; cta: string; highlight?: boolean;
}) {
  return (
    <Card className={`p-8 flex flex-col relative ${highlight ? "border-primary shadow-[var(--shadow-elegant)] lg:scale-105" : ""}`}>
      {highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">{tag}</Badge>}
      {!highlight && <Badge variant="outline" className="self-start mb-2">{tag}</Badge>}
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
      <p className="mt-4">
        <span className="text-4xl font-bold">{price}</span>
        {period && <span className="text-muted-foreground text-sm">{period}</span>}
      </p>
      <ul className="mt-6 space-y-3 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />{f}
          </li>
        ))}
      </ul>
      <Button asChild variant={highlight ? "hero" : "outline"} className="mt-8">
        <Link to="/contact">{cta}</Link>
      </Button>
    </Card>
  );
}

// keep useState import used (for potential expansion) — referenced via hooks above
void useState;
