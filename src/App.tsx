import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Oferta from "./pages/Oferta";
import Portfolio from "./pages/Portfolio";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oferta" element={<Oferta />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/contact" element={<Navigate to="/kontakt" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
