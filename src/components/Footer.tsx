import { Cloud } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-semibold text-foreground">
          <Cloud className="w-5 h-5 text-primary" />
          NordPixel
        </div>
        <p>© {new Date().getFullYear()} NordPixel. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
