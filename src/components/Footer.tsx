import { Cloud } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1c2e] text-white">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2 font-semibold text-white">
          <Cloud className="w-5 h-5 text-[#38bdf8]" />
          NordPixel
        </div>
        <p className="text-[#93c5fd]">
          © {new Date().getFullYear()} NordPixel. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
