"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Code2 } from "lucide-react";

export default function TransitionEffect() {
  const [effectType, setEffectType] = useState<"plane" | "code" | null>(null);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll-container");
    if (!scrollContainer) return;

    let lastIndex = Math.round(scrollContainer.scrollTop / window.innerHeight);
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const scrollY = scrollContainer.scrollTop;
      const index = Math.round(scrollY / pageHeight);

      if (index !== lastIndex) {
        lastIndex = index;
        
        // Alternatif geçiş (tek sayılarda uçak, çift sayılarda kod)
        const type = index % 2 === 1 ? "plane" : "code";
        setEffectType(type);
        setAnimKey(prev => prev + 1);

        clearTimeout(timeout);
        timeout = setTimeout(() => {
          setEffectType(null);
        }, 1500); // 1.5 saniye sonra ekrandan temizle
      }
    };

    // Use passive listener
    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden flex items-center justify-center">
      <AnimatePresence>
        {effectType === "plane" && (
          <motion.div
            key={`plane-${animKey}`}
            initial={{ x: "-50vw", y: "20vh", opacity: 0, rotate: -20 }}
            animate={{ 
              x: "50vw", 
              y: "-20vh", 
              opacity: [0, 0.4, 0.4, 0], 
              rotate: -20 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute text-slate-400 drop-shadow-xl"
          >
            <Plane size={200} strokeWidth={1} fill="currentColor" />
          </motion.div>
        )}

        {effectType === "code" && (
          <motion.div
            key={`code-${animKey}`}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ 
              opacity: [0, 0.3, 0.3, 0], 
              scale: 1.2,
              y: -50
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute text-slate-400 drop-shadow-xl"
          >
            <Code2 size={240} strokeWidth={1} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
