import { useEffect, useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { q: "Ile trwa realizacja strony?", a: "Standardowo 7–14 dni roboczych od akceptacji projektu i przekazania materiałów." },
  { q: "Co jest potrzebne do rozpoczęcia projektu?", a: "Krótki opis działalności, logo (jeśli jest), zdjęcia lub treści. Resztę pomożemy przygotować." },
  { q: "Czy strona będzie widoczna w Google?", a: "Tak. Każda strona otrzymuje podstawową optymalizację SEO, meta dane i mapę witryny." },
  { q: "Czy mogę samodzielnie edytować treści?", a: "Tak — udostępniamy prosty panel lub wykonujemy aktualizacje w ramach pakietu wsparcia." },
  { q: "Co zawiera pakiet hostingowy?", a: "Hosting, domenę, certyfikat SSL, monitoring oraz pomoc techniczną." },
  { q: "Czy oferujecie faktury VAT?", a: "Tak, wystawiamy faktury VAT za każdą usługę." },
  { q: "Co jeśli nie spodoba mi się projekt?", a: "Wprowadzamy poprawki aż do pełnej akceptacji — to wliczone w cenę." },
];

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = "FAQ — NordPixel";
  }, []);

  return (
    <section className="py-20 md:py-28 bg-[#f1f5fb]">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <p className="eyebrow">FAQ</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-[#0d1f3c]">Najczęściej zadawane pytania</h1>
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
                  <span className="font-bold text-[#0d1f3c]">{f.q}</span>
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
  );
}
