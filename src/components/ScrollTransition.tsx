"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollTransition() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Animasyon değerleri: Sayfanın ilk %15'lik kısmında çalışır (Hero'dan About'a kayarken)
  const y = useTransform(scrollYProgress, [0, 0.15], ["-10vh", "120vh"]);
  const x = useTransform(scrollYProgress, [0, 0.07, 0.15], ["50vw", "45vw", "55vw"]);
  const rotate = useTransform(scrollYProgress, [0, 0.07, 0.15], [30, 10, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.07, 0.15], [0.8, 1.2, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.02, 0.12, 0.15], [0, 1, 1, 0]);

  if (!mounted) return null;

  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none z-[100]"
      style={{ opacity }}
    >
      <motion.div 
        className="absolute top-0 left-0"
        style={{ y, x, rotate, scale }}
      >
        {/* Çizgisel ve zarif uçak, aşağıya doğru uçuyor */}
        <svg viewBox="0 0 24 24" className="w-20 h-20 md:w-32 md:h-32 drop-shadow-xl text-sky-500 origin-center" style={{ transform: "rotate(135deg)" }}>
          <path 
            fill="currentColor" 
            d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" 
          />
          <path d="M11.5 22 v 8 M9 21 v 5 M14 21 v 5" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 6" fill="none" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
