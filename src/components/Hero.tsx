"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { ArrowDown, Code2, Cpu, Terminal, Sparkles } from "lucide-react";

// Bulut SVG Bileşeni
const Cloud = ({ delay = 0, duration = 30, className = "" }: { delay?: number, duration?: number, className?: string }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`absolute ${className}`}
    initial={{ x: "100vw" }}
    animate={{ x: "-30vw" }}
    transition={{ repeat: Infinity, duration, ease: "linear", delay }}
  >
    <path d="M17.5,19c-1.1,0-2.1-0.4-2.8-1.1c-0.6,0.6-1.5,1.1-2.5,1.1c-1.6,0-3-1.1-3.4-2.6c-0.5,0.4-1.1,0.6-1.8,0.6 c-1.7,0-3-1.3-3-3c0-1.4,1-2.6,2.4-2.9C6.5,8.8,8.6,7,11,7c2.2,0,4.2,1.4,5.1,3.4c0.5-0.3,1-0.4,1.4-0.4c1.9,0,3.5,1.6,3.5,3.5 C21,17.4,19.4,19,17.5,19z" />
  </motion.svg>
);

// Çizgisel (Linear / Wireframe) Uçak SVG Bileşeni
const LinearAirplane = () => (
  <svg viewBox="0 0 1000 300" className="w-[400px] md:w-[700px] lg:w-[900px] drop-shadow-md">
    <g fill="none" stroke="#0ea5e9" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
      {/* Arka Kanat */}
      <path d="M 500 140 L 400 80 L 370 80 L 450 140" stroke="#38bdf8" strokeDasharray="4 4" />
      
      {/* Kuyruk Arkası */}
      <path d="M 120 140 L 80 90 L 100 90 L 130 140" stroke="#38bdf8" />
      
      {/* Gövde (Fuselage) */}
      <path d="M 80 160 C 80 160, 150 130, 300 130 L 800 130 C 900 130, 950 145, 980 155 C 990 158, 990 162, 980 165 C 950 175, 900 190, 800 190 L 300 190 C 150 190, 80 160, 80 160 Z" fill="#ffffff" fillOpacity="0.4" />
      
      {/* Ana Kuyruk */}
      <path d="M 150 135 L 200 40 L 260 40 L 250 135" />
      
      {/* Kokpit Camları */}
      <path d="M 900 145 C 920 145, 930 148, 940 152 L 940 155 L 900 155" fill="#0ea5e9" />
      
      {/* Yolcu Camları (Nokta nokta çizgisel efekt) */}
      <path d="M 300 155 L 750 155" strokeDasharray="10 20" strokeWidth="8" stroke="#38bdf8" />

      {/* Kapılar */}
      <rect x="250" y="140" width="15" height="35" rx="2" />
      <rect x="850" y="145" width="15" height="30" rx="2" />
      
      {/* Ön Ana Kanat */}
      <path d="M 450 175 L 300 280 L 330 280 L 550 175" fill="#ffffff" fillOpacity="0.8" />
      <path d="M 330 280 L 335 260 L 340 280" /> 
      
      {/* Motor */}
      <path d="M 460 180 L 450 200 L 480 200 L 490 180" />
      <path d="M 410 195 L 480 195 C 490 195, 495 205, 495 210 C 495 215, 490 225, 480 225 L 410 225 C 400 225, 395 215, 395 210 C 395 205, 400 195, 410 195 Z" fill="#ffffff" fillOpacity="0.5" />
      <ellipse cx="490" cy="210" rx="8" ry="15" fill="#f8fafc" />
      <ellipse cx="400" cy="210" rx="5" ry="10" />

      {/* Rüzgar/Hız Çizgileri (Hız Efekti) */}
      <path d="M -50 160 L 20 160" stroke="#bae6fd" strokeWidth="3" strokeDasharray="10 10" />
      <path d="M -100 140 L 0 140" stroke="#bae6fd" strokeWidth="2" strokeDasharray="5 15" />
      <path d="M 10 180 L 60 180" stroke="#bae6fd" strokeWidth="4" strokeDasharray="20 10" />
    </g>
  </svg>
);

// Arka planda yüzen gerçek kod parçacıkları
const codeSnippets = [
  "const [phase, setPhase] = useState('tech');",
  "import { motion } from 'framer-motion';",
  "function optimizeFlightPath(coordinates) {",
  "return <FlightControl />;",
  "npm run build && npm start",
  "git commit -m 'feat: add wings'",
  "export default function App() {",
  "console.log('Ready for takeoff');",
  "await supabase.from('logs').insert(data);",
  "System.out.println(\"Hello World\");",
  "def calculate_trajectory(v, theta):",
  "async function handleRequest(req) {",
  "<motion.div animate={controls} />",
  "const speed = calculateSpeed();",
  "fetch('/api/navigation')",
];

const FloatingCode = () => {
  return (
    <>
      {codeSnippets.map((code, index) => {
        // Her kod parçası için farklı pozisyon ve hız
        const top = `${(index * 13) % 90 + 5}%`;
        const left = `${(index * 27) % 90 + 5}%`;
        const duration = 15 + (index % 10) * 3;
        const delay = (index % 5) * 1.5;
        
        return (
          <motion.div
            key={index}
            className="absolute font-mono text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap text-sky-600/30"
            style={{ left }}
            initial={{ y: "120vh", opacity: 0 }}
            animate={{ 
              y: ["120vh", "-20vh"],
              opacity: [0, 1, 1, 0],
              x: [0, (index % 2 === 0 ? 30 : -30)]
            }}
            transition={{
              repeat: Infinity,
              duration,
              delay,
              ease: "linear"
            }}
          >
            {code}
          </motion.div>
        );
      })}
    </>
  );
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  // Animasyon Kontrolcüleri
  const airplaneControls = useAnimation();
  const textControls = useAnimation();
  const skyControls = useAnimation();
  const techControls = useAnimation();
  const ctaControls = useAnimation();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    let isActive = true;

    const runCinematicSequence = async () => {
      while (isActive) {
        // --- FAZ 1: HAZIRLIK & GÖKYÜZÜ ---
        skyControls.start({ opacity: 1, transition: { duration: 1 } });
        techControls.start({ opacity: 0, transition: { duration: 1 } });
        
        textControls.start({ clipPath: "inset(0 100% 0 0)", opacity: 0, transition: { duration: 0.1 } });
        ctaControls.start({ opacity: 0, y: 20, transition: { duration: 0.5 } });
        
        airplaneControls.start({ x: "-100vw", y: "15vh", scale: 0.8, rotate: 5, transition: { duration: 0 } });

        await new Promise(r => setTimeout(r, 1000));
        if (!isActive) break;

        // --- FAZ 2: ÇİZGİSEL UÇAK GEÇİŞİ VE METNİN BELİRMESİ ---
        airplaneControls.start({
          x: "120vw",
          y: "-5vh",
          scale: 1.1,
          rotate: -2,
          transition: { duration: 4.5, ease: "easeInOut" }
        });

        await new Promise(r => setTimeout(r, 1600));
        if (!isActive) break;

        textControls.start({
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          transition: { duration: 1.5, ease: "linear" }
        });

        await new Promise(r => setTimeout(r, 2900));
        if (!isActive) break;

        // --- FAZ 3: YAZILIM / MÜHENDİSLİK TEMASINA GEÇİŞ (YOĞUN EFEKTLİ) ---
        skyControls.start({ opacity: 0, transition: { duration: 2 } });
        techControls.start({ opacity: 1, transition: { duration: 2 } });
        
        ctaControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });

        await new Promise(r => setTimeout(r, 8000)); // Tech alanında izleme süresi
        if (!isActive) break;

        // --- FAZ 4: ÇIKIŞ ---
        textControls.start({ opacity: 0, transition: { duration: 1 } });
        ctaControls.start({ opacity: 0, transition: { duration: 1 } });
        
        await new Promise(r => setTimeout(r, 1500));
      }
    };

    runCinematicSequence();

    return () => { 
      isActive = false; 
    };
  }, [mounted, airplaneControls, textControls, skyControls, techControls, ctaControls]);

  if (!mounted) return <section className="min-h-screen bg-sky-50" />;

  return (
    <section className="relative min-h-screen bg-[#F8FAFC] overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. Gökyüzü Arka Planı (Sky Mode) */}
      <motion.div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-sky-100 to-[#F8FAFC] overflow-hidden pointer-events-none"
        animate={skyControls}
      >
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-white rounded-full blur-[100px] opacity-70" />
        
        <Cloud delay={0} duration={35} className="w-48 top-20 text-white/90" />
        <Cloud delay={12} duration={45} className="w-64 top-40 text-white/70" />
        <Cloud delay={5} duration={28} className="w-32 top-1/3 text-white/80" />
        <Cloud delay={20} duration={50} className="w-56 bottom-1/4 text-white/60" />
      </motion.div>

      {/* 2. Teknoloji Arka Planı (Tech Mode - BOL EFEKTLİ) */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={techControls}
      >
        {/* Hareketli Matris / Grid Arka Plan */}
        <motion.div 
          className="absolute inset-0 opacity-50" 
          animate={{ backgroundPosition: ["0px 0px", "40px 40px"] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          style={{
            backgroundImage: 'linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} 
        />
        
        {/* Merkezde Parlama */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-200/20 rounded-full blur-[120px]" />

        {/* Yüzen Kod Parçacıkları (Matrix Tarzı ama Açık Tema) */}
        <FloatingCode />

        {/* Dinamik Teknoloji İkonları & Düğüm (Node) Bağlantıları */}
        <motion.div animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 4 }} className="absolute top-1/4 left-1/5 md:left-1/4 text-sky-400 opacity-60">
          <Code2 size={72} />
          <div className="absolute top-1/2 left-full w-32 h-[1px] bg-gradient-to-r from-sky-400 to-transparent" />
        </motion.div>

        <motion.div animate={{ y: [0, 30, 0], scale: [1, 1.2, 1], rotate: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 5 }} className="absolute bottom-1/4 right-1/5 md:right-1/4 text-blue-400 opacity-50">
          <Cpu size={84} />
          <div className="absolute top-1/2 right-full w-48 h-[2px] bg-gradient-to-l from-blue-400 to-transparent" />
        </motion.div>

        <motion.div animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 6 }} className="absolute top-1/3 right-1/4 text-slate-400 opacity-50">
          <Terminal size={64} />
        </motion.div>

        <motion.div animate={{ scale: [0.8, 1.2, 0.8], opacity: [0.3, 0.8, 0.3] }} transition={{ repeat: Infinity, duration: 3 }} className="absolute bottom-1/3 left-1/3 text-sky-300">
          <Sparkles size={48} />
        </motion.div>
      </motion.div>

      {/* 3. Ana Metin İçeriği */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-5xl px-6 pointer-events-none">
        
        <motion.div 
          className="flex flex-col items-center justify-center w-full"
          animate={textControls}
        >
          <p className="text-sm md:text-base font-semibold text-sky-600 tracking-widest uppercase mb-4 text-center drop-shadow-sm">
            Pilot &amp; Bilgisayar Mühendisi
          </p>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-slate-800 drop-shadow-md text-center leading-[1.0] mb-6">
            Ela Erdem
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl text-center leading-relaxed font-medium">
            Tam burslu Pilotaj ve Bilgisayar Mühendisliği öğrencisiyim. 
            Zamanımın bir kısmı bulutların üzerinde, kalanı ise bilgisayar başında teknoloji üreterek geçiyor.
          </p>
        </motion.div>

        {/* 4. Etkileşimli Butonlar */}
        <motion.div 
          animate={ctaControls}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
        >
          <a
            href="https://linkedin.com/in/ela-erdem-22a009251/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-8 py-4 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-sky-500/25 hover:-translate-y-1"
          >
            <span className="relative z-10">LinkedIn Profilim ↗</span>
            <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#hakkimda"
            className="px-8 py-4 text-sm font-semibold text-slate-900 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full hover:bg-sky-50 hover:border-sky-200 hover:text-sky-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
          >
            Daha Fazla
          </a>
        </motion.div>
      </div>

      {/* 5. Uçak Animasyonu */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-20"
      >
        <motion.div animate={airplaneControls}>
          <LinearAirplane />
        </motion.div>
      </motion.div>

      {/* 6. Scroll İndikatörü */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="w-6 h-6 text-slate-400" />
        </motion.div>
      </motion.div>

    </section>
  );
}
