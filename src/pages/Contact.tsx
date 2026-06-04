import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";

type SubmitStatus = "success" | "error" | null;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>(null);

  useEffect(() => {
    document.title = "Kontakt — NordPixel";
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/mdavnqgn", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <Badge variant="secondary" className="mb-4">Kontakt</Badge>
        <h1 className="text-4xl md:text-5xl font-bold">Bezpłatna wycena</h1>
        <p className="mt-3 text-muted-foreground">
          Opowiedz nam o swoim biznesie — wrócimy do Ciebie w 24 godziny.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card
          className="p-8 text-primary-foreground"
          style={{ background: "var(--gradient-primary)" }}
        >
          <h2 className="text-xl font-semibold mb-6">Dane kontaktowe</h2>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:kontakt@nordpixel.pl" className="hover:underline">
                kontakt@nordpixel.pl
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <a href="tel:+48600000000" className="hover:underline">+48 600 000 000</a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              Polska — obsługujemy zdalnie
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5" />
              Pn–Pt 9:00–18:00
            </li>
          </ul>
          <div className="mt-8 pt-8 border-t border-primary-foreground/20">
            <p className="text-5xl font-bold">24h</p>
            <p className="text-sm opacity-90 mt-2">
              Średni czas odpowiedzi na zapytania ofertowe.
            </p>
          </div>
        </Card>

        <Card className="p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Imię i nazwisko *</Label>
              <Input
                id="name"
                required
                className="mt-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                className="mt-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
              <Input
                id="phone"
                type="tel"
                className="mt-1"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="msg">Wiadomość *</Label>
              <Textarea
                id="msg"
                required
                rows={5}
                className="mt-1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              variant="hero"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Wysyłanie…
                </>
              ) : (
                "Wyślij zapytanie"
              )}
            </Button>
            {status === "success" && (
              <p className="text-sm text-green-600 font-medium">
                Wiadomość wysłana! Odezwiemy się wkrótce.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600 font-medium">
                Coś poszło nie tak. Spróbuj ponownie.
              </p>
            )}
            <p className="text-xs text-muted-foreground">
              Wysyłając formularz akceptujesz politykę prywatności.
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}
