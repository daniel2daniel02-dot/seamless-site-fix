import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Zap, Smartphone, Search, Headphones } from "lucide-react";

const features = [
  { icon: Zap, title: "Szybka realizacja", desc: "Twoja strona online w 7–14 dni roboczych." },
  { icon: Smartphone, title: "Mobile-first", desc: "Wygląda świetnie na telefonie, tablecie i komputerze." },
  { icon: Search, title: "SEO w standardzie", desc: "Zoptymalizowana, by klienci znajdowali Cię w Google." },
  { icon: Headphones, title: "Wsparcie 7/7", desc: "Pomagamy także po uruchomieniu strony." },
];

export default function About() {
  useEffect(() => {
    document.title = "O nas — NordPixel";
  }, []);

  return (
    <div className="container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <Badge variant="secondary" className="mb-4">O NordPixel</Badge>
        <h1 className="text-4xl md:text-5xl font-bold">Tworzymy strony, które pracują na Twój sukces</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Jesteśmy zespołem projektantów i programistów, który pomaga małym i średnim firmom zaistnieć w internecie. Specjalizujemy się w stronach dla restauracji, kawiarni, barów oraz lokalnych usług.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((f) => (
          <Card key={f.title} className="p-6 hover:shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h2 className="font-semibold text-lg">{f.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-20 prose prose-neutral dark:prose-invert">
        <h2 className="text-2xl font-bold mb-4">Nasza misja</h2>
        <p className="text-muted-foreground">
          Wierzymy, że każda firma — niezależnie od wielkości — zasługuje na profesjonalną obecność w internecie. Dlatego oferujemy przejrzyste ceny, szybką realizację i pełne wsparcie po wdrożeniu.
        </p>
      </div>
    </div>
  );
}
