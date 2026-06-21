"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Gerçekçi Ticari Uçak İkonu (Material Design Flight Icon)
const Jet = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
  </svg>
);

const BackgroundAviation = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50/40">
       
       {/* 1. Kalkış Yapan Uçak (Takeoff) - Sol alttan sağ üste */}
       <motion.div
         className="absolute left-0 bottom-0"
         initial={{ x: "-20vw", y: "20vh", opacity: 0 }}
         animate={{
           x: ["-20vw", "120vw"],
           y: ["20vh", "-120vh"],
           scale: [0.5, 1.4], // Bize yaklaşıyor hissi
           opacity: [0, 0.4, 0],
         }}
         transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 1 }}
       >
         <div className="flex flex-col items-center rotate-45">
           <Jet className="w-14 h-14 text-sky-500" />
           {/* Kuyruk İzi (Contrail) */}
           <div className="w-[3px] h-[300px] bg-gradient-to-b from-sky-400/50 to-transparent rounded-full mt-1" />
         </div>
       </motion.div>
       
       {/* 2. İniş Yapan Uçak (Landing) - Sağ üstten sol alta */}
       <motion.div
         className="absolute right-0 top-0"
         initial={{ x: "20vw", y: "-20vh", opacity: 0 }}
         animate={{
           x: ["20vw", "-120vw"],
           y: ["-20vh", "120vh"],
           scale: [1.2, 0.4], // Uzaklaşıyor/Alçalıyor hissi
           opacity: [0, 0.3, 0],
         }}
         transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 6 }}
       >
         <div className="flex flex-col items-center -rotate-[135deg]">
           <Jet className="w-12 h-12 text-slate-500" />
           <div className="w-[2px] h-[200px] bg-gradient-to-b from-slate-400/40 to-transparent rounded-full mt-1" />
         </div>
       </motion.div>

       {/* 3. Seyir Halindeki Uçak (Cruising) - Soldan sağa düz */}
       <motion.div
         className="absolute top-[25%] left-0"
         initial={{ x: "-20vw" }}
         animate={{ x: ["-20vw", "120vw"] }}
         transition={{ duration: 35, repeat: Infinity, ease: "linear", delay: 0 }}
       >
         <div className="flex flex-col items-center rotate-90">
           <Jet className="w-8 h-8 text-sky-400/60" />
           <div className="w-[2px] h-[400px] bg-gradient-to-b from-sky-300/30 to-transparent mt-1" />
         </div>
       </motion.div>

       {/* 4. Seyir Halindeki Uçak (Cruising) - Sağdan sola düz */}
       <motion.div
         className="absolute top-[65%] right-0"
         initial={{ x: "20vw" }}
         animate={{ x: ["20vw", "-120vw"] }}
         transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 10 }}
       >
         <div className="flex flex-col items-center -rotate-90">
           <Jet className="w-6 h-6 text-slate-400/50" />
           <div className="w-[1px] h-[350px] bg-gradient-to-b from-slate-400/30 to-transparent mt-1" />
         </div>
       </motion.div>

       {/* 5. Uzak/Yüksek İrtifa Jeti - Çapraz hızlı geçiş */}
       <motion.div
         className="absolute left-[30%] bottom-0"
         initial={{ x: "-10vw", y: "10vh", opacity: 0 }}
         animate={{
           x: ["-10vw", "90vw"],
           y: ["10vh", "-110vh"],
           opacity: [0, 0.15, 0]
         }}
         transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: 15 }}
       >
         <div className="flex flex-col items-center rotate-[35deg]">
           <Jet className="w-5 h-5 text-slate-400" />
           <div className="w-[1px] h-[150px] bg-gradient-to-b from-slate-400/20 to-transparent mt-1" />
         </div>
       </motion.div>

    </div>
  );
};

export default function About() {
  return (
    <div id="hakkimda" className="h-full w-full flex items-center justify-center overflow-y-auto py-16 md:py-0 relative z-20">
      <BackgroundAviation />
      <div className="max-w-5xl w-full mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          
          {/* Sol: Profil & Kimlik */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="w-full max-w-[160px] aspect-square rounded-full bg-slate-100 overflow-hidden mb-6 flex-shrink-0">
              <img 
                src="/ela-erdem-pilot.jpg" 
                alt="Ela Erdem" 
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105" 
              />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Ela Erdem</h3>
            <p className="text-sm text-slate-500 mt-1 uppercase tracking-wider font-semibold">Pilot & Yazılım Mühendisi</p>
            
            <div className="w-8 h-px bg-slate-300 my-5 mx-auto md:mx-0"></div>
            
            <div className="flex flex-col gap-3 w-full">
              <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                <span className="font-semibold text-slate-400">Ana Dal: Pilotaj</span>
                <span className="text-right font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">3.95 / 4.00</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                <span className="font-semibold text-slate-400">Çift Ana Dal: Bilgisayar Müh.</span>
                <span className="text-right font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">3.96 / 4.00</span>
              </div>
              <div className="flex justify-between items-center text-xs border-b border-slate-100 pb-2">
                <span className="font-semibold text-slate-400">Lisanslar</span>
                <span className="text-right font-medium text-slate-600">PPL, CPL(A), IR(A), İHA</span>
              </div>
            </div>
          </div>

          {/* Sağ: Detaylı Bilgilendirici Metin */}
          <div className="md:col-span-8 flex flex-col justify-center">
            
            <div className="flex items-start gap-3 mb-8">
              <Quote className="w-6 h-6 text-slate-300 mt-1 shrink-0" />
              <p className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                "Havacılığın sıfır hata prensibini, kodun sonsuz olasılıklarıyla birleştiriyorum."
              </p>
            </div>

            <div className="space-y-6 text-sm md:text-base text-slate-600 leading-relaxed text-justify font-medium">
              <p>
                Akademik hayatımı <strong className="text-slate-900 font-bold">Özyeğin Üniversitesi'nde</strong> tam burslu olarak sürdürmekteyim. Temel uzmanlığım ve ana bölümüm olan <strong className="text-slate-900 font-bold">Pilotaj</strong> eğitimime yüksek bir onur derecesiyle (<strong className="text-slate-900 font-extrabold bg-slate-100 px-1 py-0.5 rounded">3.95 GPA</strong>) devam ederken, aynı zamanda <strong className="text-slate-900 font-bold">Bilgisayar Mühendisliği</strong> bölümünde Çift Ana Dal (Double Major) yapmaktayım (<strong className="text-slate-900 font-extrabold bg-slate-100 px-1 py-0.5 rounded">3.96 GPA</strong>). Havacılığın gerektirdiği yüksek operasyonel standartları, teknolojik sistem mimarileri inşa ederek destekliyorum.
              </p>
              
              <p>
                Yazılım alanında <span className="text-slate-900">Next.js, React, TypeScript, Python ve Node.js</span> gibi modern teknolojilere derinlemesine hakimim. Kurucusu olduğum <strong className="text-slate-900 font-bold">Katipözet</strong> projesi; adli metinleri saniyeler içinde analiz edip özetleyen yapay zeka destekli bir platformdur ve kısa sürede aktif <strong className="text-slate-900 font-bold">1.000+ kullanıcı, 20.000+ analiz</strong> hacmine ulaşarak gerçek bir pazar doğrulaması almıştır.
              </p>

              <p>
                Havacılık tarafında ise Sivil Havacılık Genel Müdürlüğü (SHGM) onaylı tüm kritik lisanslara (PPL, CPL, IR) ve İHA0123 ticari drone pilotu sertifikasyonlarına sahibim. Kariyerimde, akademik mükemmellik ile gerçek dünya projelerini entegre ederek fark yaratmayı hedefliyorum.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
