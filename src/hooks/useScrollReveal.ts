import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Adds a subtle fade-up reveal to page sections as they enter the viewport.
 * Purely presentational — does not touch app logic or data.
 */
export function useScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("main section"),
    );
    if (targets.length === 0) return;

    targets.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    targets.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      targets.forEach((el) => el.classList.remove("reveal", "reveal-in"));
    };
  }, [location.pathname]);
}
