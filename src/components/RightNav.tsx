"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Giriş" },
  { id: "hakkimda", label: "Hakkımda" },
  { id: "deneyim", label: "Deneyim" },
  { id: "projeler", label: "Projelerim" },
  { id: "egitim", label: "Eğitim" },
  { id: "lisanslar", label: "Lisanslar" },
  { id: "yetenekler", label: "Yetenekler" },
];

export default function RightNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll-container");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const scrollY = scrollContainer.scrollTop;
      
      const index = Math.round(scrollY / pageHeight);
      if (sections[index]) {
        setActive(sections[index].id);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group relative flex items-center justify-center w-8 h-8 outline-none"
          aria-label={`Scroll to ${section.label}`}
        >
          {/* Tooltip */}
          <div className="absolute right-full pr-3 pointer-events-none">
            <div className="px-3 py-1.5 rounded-lg bg-slate-900/90 backdrop-blur-md text-white text-xs font-medium shadow-xl border border-white/10 whitespace-nowrap transition-all duration-300 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0">
              {section.label}
            </div>
          </div>
          
          {/* Indicator */}
          <div className="relative flex items-center justify-center w-full h-full">
            {/* Outer Ring (Active) */}
            <div 
              className={`absolute rounded-full border border-sky-400/60 transition-all duration-500 ease-out ${
                active === section.id ? "w-6 h-6 opacity-100 scale-100" : "w-2 h-2 opacity-0 scale-50"
              }`}
            />
            {/* Inner Dot */}
            <div
              className={`absolute rounded-full transition-all duration-300 ${
                active === section.id 
                  ? "bg-sky-500 w-2 h-2 shadow-[0_0_10px_rgba(14,165,233,0.8)]" 
                  : "bg-slate-300 w-1.5 h-1.5 group-hover:bg-sky-400 group-hover:scale-125 group-hover:shadow-[0_0_8px_rgba(14,165,233,0.5)]"
              }`}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
