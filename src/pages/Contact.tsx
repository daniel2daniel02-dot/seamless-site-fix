import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";

export default function Contact() {
  useEffect(() => {
    document.title = "Kontakt — NordPixel";
  }, []);

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
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Dziękujemy! Skontaktujemy się w 24h.");
            }}
          >
            <div>
              <Label htmlFor="name">Imię i nazwisko *</Label>
              <Input id="name" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input id="email" type="email" required className="mt-1" />
            </div>
            <div>
              <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
              <Input id="phone" type="tel" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="msg">Wiadomość *</Label>
              <Textarea id="msg" required rows={5} className="mt-1" />
            </div>
            <Button type="submit" size="lg" variant="hero" className="w-full">
              Wyślij zapytanie
            </Button>
            <p className="text-xs text-muted-foreground">
              Wysyłając formularz akceptujesz politykę prywatności.
            </p>
          </form>
        </Card>
      </div>
    </div>
  );
}
