import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";

type SubmitStatus = "success" | "error" | null;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [hasDomain, setHasDomain] = useState("");
  const [accept, setAccept] = useState(false);
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
        body: JSON.stringify({ name, email, phone, business, hasDomain, message }),
      });

      if (response.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setBusiness("");
        setHasDomain("");
        setAccept(false);
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

  const labelCls = "block text-[11px] font-bold uppercase tracking-wider text-[#38bdf8] mb-2";
  const inputCls =
    "w-full h-11 px-4 rounded-lg bg-[#0d1f3c] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#38bdf8] transition-colors";

  return (
    <section className="bg-[#0d1f3c] text-white">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#38bdf8]">Kontakt</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">Kontakt / Bezpłatna wycena</h1>
          <p className="mt-4 text-white/70">
            Opowiedz nam o swoim biznesie — wrócimy do Ciebie w 24 godziny.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Dane kontaktowe</h2>
            <ul className="space-y-5 text-sm">
              {[
                { Icon: Mail, label: "kontakt@nordpixel.pl", href: "mailto:kontakt@nordpixel.pl" },
                { Icon: Phone, label: "+48 600 000 000", href: "tel:+48600000000" },
                { Icon: MapPin, label: "Polska — obsługujemy zdalnie" },
                { Icon: Clock, label: "Pn–Pt 9:00–18:00" },
              ].map((row, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-[#1e293b] flex items-center justify-center shrink-0">
                    <row.Icon className="w-5 h-5 text-[#38bdf8]" />
                  </span>
                  {row.href ? (
                    <a href={row.href} className="text-white hover:text-[#38bdf8] transition-colors">
                      {row.label}
                    </a>
                  ) : (
                    <span>{row.label}</span>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-10 p-8 rounded-2xl bg-[#1e293b] border border-white/5">
              <p className="text-5xl font-bold text-[#38bdf8]">24h</p>
              <p className="text-sm text-white/70 mt-2">
                Średni czas odpowiedzi na zapytania ofertowe.
              </p>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="p-8 rounded-2xl bg-[#1e293b] border border-white/5">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={labelCls}>Imię i nazwisko *</label>
                  <input
                    id="name"
                    required
                    className={inputCls}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Email *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className={inputCls}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>Telefon (opcjonalnie)</label>
                  <input
                    id="phone"
                    type="tel"
                    className={inputCls}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="business" className={labelCls}>Rodzaj biznesu *</label>
                  <input
                    id="business"
                    required
                    className={inputCls}
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <span className={labelCls}>Czy masz już domenę?</span>
                <div className="flex gap-6 text-sm">
                  {["Tak", "Nie"].map((opt) => (
                    <label key={opt} className="inline-flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="hasDomain"
                        value={opt}
                        checked={hasDomain === opt}
                        onChange={(e) => setHasDomain(e.target.value)}
                        className="w-4 h-4 accent-[#38bdf8]"
                      />
                      <span className="text-white">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="msg" className={labelCls}>Wiadomość *</label>
                <textarea
                  id="msg"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#0d1f3c] border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-[#38bdf8] transition-colors resize-y"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <label className="flex items-center gap-3 text-sm text-white/80 cursor-pointer">
                <input
                  type="checkbox"
                  checked={accept}
                  onChange={(e) => setAccept(e.target.checked)}
                  className="w-4 h-4 accent-[#38bdf8]"
                />
                Akceptuję politykę prywatności
              </label>

              <Button
                type="submit"
                size="lg"
                variant="gradient"
                className="w-full h-14 text-base"
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
                <p className="text-sm text-green-400 font-medium">
                  Wiadomość wysłana! Odezwiemy się wkrótce.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-400 font-medium">
                  Coś poszło nie tak. Spróbuj ponownie.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
