import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Zap, Smartphone, Search, Headphones, Check, ArrowRight,
  Mail, Phone, MapPin, Clock, Star, Cloud, Menu, X,
} from "lucide-react";
import heroImage from "@/assets/hero-devices.png";

const siteUrl = "https://nordpixel.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NordPixel — Profesjonalne strony internetowe dla firm | od 999 zł" },
      { name: "description", content: "Tworzymy nowoczesne strony internetowe dla restauracji, kawiarni, barów i lokalnych firm. Realizacja 7–14 dni, SEO, mobile-first, wsparcie 7/7. Bezpłatna wycena w 24h." },
      { name: "keywords", content: "strony internetowe, projektowanie stron www, strona dla firmy, strona dla restauracji, web design Polska, SEO, hosting, NordPixel" },
      { name: "author", content: "NordPixel" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "NordPixel — Profesjonalne strony internetowe dla firm" },
      { property: "og:description", content: "Strony internetowe dla restauracji, kawiarni, barów i lokalnych firm. Realizacja 7–14 dni. Bezpłatna wycena." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pl_PL" },
      { property: "og:url", content: siteUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "NordPixel — Strony internetowe dla firm" },
      { name: "twitter:description", content: "Realizacja 7–14 dni. SEO, mobile-first, wsparcie 7/7." },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "NordPixel",
          description: "Projektowanie i wdrażanie stron internetowych dla małych i średnich firm.",
          url: siteUrl,
          email: "kontakt@nordpixel.pl",
          telephone: "+48600000000",
          areaServed: "PL",
          priceRange: "999 PLN",
          openingHours: "Mo-Fr 09:00-18:00",
        }),
      },
    ],
  }),
  component: Index,
});

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

const process = [
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
  { q: "Co jeśli nie spodoba mi się projekt?", a: "Wprowadzamy poprawki aż do pełnej akceptacji wizualnej — to część każdego pakietu." },
  { q: "Czy robicie sklepy internetowe?", a: "Tak, na zapytanie przygotujemy indywidualną wycenę sklepu." },
];

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-bold text-lg">
            <Cloud className="w-6 h-6 text-primary" />
            NordPixel
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#why" className="hover:text-primary transition-colors">Dlaczego my</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Oferta</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-primary transition-colors">Kontakt</a>
          </nav>
          <div className="hidden md:block">
            <Button asChild variant="hero"><a href="#contact">Bezpłatna wycena</a></Button>
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="md:hidden border-t border-border px-4 py-4 flex flex-col gap-4 text-sm font-medium bg-background">
            <a href="#why" onClick={() => setOpen(false)}>Dlaczego my</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Oferta</a>
            <a href="#portfolio" onClick={() => setOpen(false)}>Portfolio</a>
            <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
            <a href="#contact" onClick={() => setOpen(false)}>Kontakt</a>
            <Button asChild variant="hero"><a href="#contact" onClick={() => setOpen(false)}>Bezpłatna wycena</a></Button>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
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
              <Button asChild size="lg" variant="hero"><a href="#contact">Zamów stronę <ArrowRight className="ml-2 w-4 h-4" /></a></Button>
              <Button asChild size="lg" variant="outline"><a href="#portfolio">Zobacz realizacje</a></Button>
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
      <section id="why" className="py-20 md:py-28">
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
            <PriceCard tag="Jednorazowo" title="Strona internetowa" price="999 zł" features={["Projekt graficzny","Responsywność (mobile/tablet/desktop)","Optymalizacja SEO","Mapa Google Maps","Certyfikat SSL","Czas realizacji 7–14 dni"]} cta="Zamów teraz" />
            <PriceCard tag="Najpopularniejszy" title="Hosting + Domena + Wsparcie" price="49 zł" period="/miesiąc" subtitle="Przy zakupie strony od nas" highlight features={["Hosting strony","Własna domena","Certyfikat SSL w cenie","Pomoc techniczna 7 dni w tygodniu","Aktualizacje treści w ciągu 72h","Monitoring dostępności strony"]} cta="Wybierz plan" />
            <PriceCard tag="Dla własnej strony" title="Hosting + Domena + Wsparcie" price="69 zł" period="/miesiąc" features={["Hosting strony","Własna domena","Certyfikat SSL w cenie","Pomoc techniczna 7 dni w tygodniu","Aktualizacje treści w ciągu 72h","Monitoring dostępności strony"]} cta="Wybierz plan" />
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
            {process.map((s) => (
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
            <p className="mt-3 text-muted-foreground">Opinie zweryfikowanych klientów NordPixel.</p>
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
      <section id="faq" className="py-20 md:py-28 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-14">
            <Badge variant="secondary" className="mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Najczęściej zadawane pytania</h2>
            <p className="mt-3 text-muted-foreground">Masz pytanie? Pewnie znajdziesz tu odpowiedź.</p>
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

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="secondary" className="mb-4">Kontakt</Badge>
            <h2 className="text-3xl md:text-4xl font-bold">Bezpłatna wycena</h2>
            <p className="mt-3 text-muted-foreground">Opowiedz nam o swoim biznesie — wrócimy do Ciebie w 24 godziny.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
              <h3 className="text-xl font-semibold mb-6">Dane kontaktowe</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center gap-3"><Mail className="w-5 h-5" /><a href="mailto:kontakt@nordpixel.pl" className="hover:underline">kontakt@nordpixel.pl</a></li>
                <li className="flex items-center gap-3"><Phone className="w-5 h-5" /><a href="tel:+48600000000" className="hover:underline">+48 600 000 000</a></li>
                <li className="flex items-center gap-3"><MapPin className="w-5 h-5" />Polska — obsługujemy zdalnie</li>
                <li className="flex items-center gap-3"><Clock className="w-5 h-5" />Pn–Pt 9:00–18:00</li>
              </ul>
              <div className="mt-8 pt-8 border-t border-primary-foreground/20">
                <p className="text-5xl font-bold">24h</p>
                <p className="text-sm opacity-90 mt-2">Średni czas odpowiedzi na zapytania ofertowe.</p>
              </div>
            </Card>
            <Card className="p-8">
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Dziękujemy! Skontaktujemy się w 24h."); }}>
                <div><Label htmlFor="name">Imię i nazwisko *</Label><Input id="name" required className="mt-1" /></div>
                <div><Label htmlFor="email">Email *</Label><Input id="email" type="email" required className="mt-1" /></div>
                <div><Label htmlFor="phone">Telefon (opcjonalnie)</Label><Input id="phone" type="tel" className="mt-1" /></div>
                <div>
                  <Label htmlFor="biz">Rodzaj biznesu *</Label>
                  <select id="biz" required className="mt-1 w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                    <option value="">—</option><option>Restauracja</option><option>Kawiarnia</option><option>Bar</option><option>Pomoc drogowa</option><option>Fryzjer</option><option>Inne</option>
                  </select>
                </div>
                <div><Label htmlFor="msg">Wiadomość *</Label><Textarea id="msg" required rows={4} className="mt-1" /></div>
                <Button type="submit" size="lg" variant="hero" className="w-full">Wyślij zapytanie</Button>
                <p className="text-xs text-muted-foreground">Wysyłając formularz akceptujesz politykę prywatności.</p>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 font-semibold text-foreground"><Cloud className="w-5 h-5 text-primary" />NordPixel</div>
          <p>© {new Date().getFullYear()} NordPixel. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
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
      <Button asChild variant={highlight ? "hero" : "outline"} className="mt-8"><a href="#contact">{cta}</a></Button>
    </Card>
  );
}
