"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Code2, Terminal, Cpu, Database, Braces } from "lucide-react";

const categories = ["Tümü", "Yazılım", "Havacılık"];

const experienceData = [
  {
    title: "Yazılım Mühendisi",
    org: "katipozet.com · Kendi İşim",
    date: "Oca 2025 – Devam ediyor",
    duration: "1 yıl 6 ay",
    desc: "Adli metinleri hızlı ve anlaşılır özetlere dönüştüren yapay zeka destekli hukuk-teknoloji platformu. 1.000+ kullanıcı ve 20.000+ özet ile aktif kullanılan bir ürün.",
    skills: ["React.js", "Next.js", "TypeScript", "Node.js", "Supabase"],
    tags: ["Yazılım"],
  },
  {
    title: "Yazılım Test Mühendisi (Stajyer)",
    org: "Aselsan",
    date: "Haz 2025 – Tem 2025",
    duration: "2 ay",
    desc: "Türkiye'nin lider savunma sanayii şirketinde yazılım test süreçlerinde aktif görev.",
    skills: [],
    tags: ["Yazılım"],
  },
  {
    title: "Sertifikalı Uçuş Eğitmeni",
    org: "Davut Air · Sözleşmeli",
    date: "Eki 2025 – Ara 2025",
    duration: "3 ay",
    desc: "Sertifikalı uçuş eğitmeni olarak pilotaj öğrencilerine teorik ve pratik uçuş eğitimi.",
    skills: [],
    tags: ["Havacılık"],
  },
];

const BackgroundTech = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-slate-50/40">
       
       {/* Arka Plan Blueprint Izgarası (Grid) */}
       <div 
         className="absolute inset-0 opacity-10"
         style={{
           backgroundImage: 'linear-gradient(to right, #94a3b8 1px, transparent 1px), linear-gradient(to bottom, #94a3b8 1px, transparent 1px)',
           backgroundSize: '40px 40px'
         }} 
       />
       
       {/* 1. Merkez İşlemci (CPU Node) Parıltısı */}
       <motion.div
         className="absolute left-[15%] top-[25%]"
         animate={{ y: ["-10px", "10px", "-10px"] }}
         transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
       >
         <div className="relative flex items-center justify-center">
           <div className="absolute w-32 h-32 bg-sky-300/20 rounded-full blur-2xl" />
           <Cpu size={64} className="text-sky-400 opacity-40" />
           {/* Veri Yolları (Data Lines) */}
           <div className="absolute top-1/2 left-full w-[200px] h-[1px] bg-gradient-to-r from-sky-400/30 to-transparent" />
           <div className="absolute bottom-full left-1/2 w-[1px] h-[150px] bg-gradient-to-t from-sky-400/30 to-transparent" />
         </div>
       </motion.div>

       {/* 2. Dönen Kod Sembolü (Braces) */}
       <motion.div
         className="absolute right-[20%] top-[15%]"
         animate={{ rotate: 360 }}
         transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
       >
         <Braces size={96} className="text-slate-300 opacity-20" />
       </motion.div>
       
       {/* 3. Veritabanı (Database) ve Akış */}
       <motion.div
         className="absolute right-[10%] bottom-[30%]"
         animate={{ y: ["10px", "-10px", "10px"] }}
         transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
       >
         <div className="relative">
           <div className="absolute w-24 h-24 bg-slate-300/20 rounded-full blur-2xl" />
           <Database size={56} className="text-slate-400 opacity-30" />
           <div className="absolute top-1/2 right-full w-[150px] h-[1px] bg-gradient-to-l from-slate-400/30 to-transparent" />
         </div>
       </motion.div>

       {/* 4. Kayan Terminal Sembolü */}
       <motion.div
         className="absolute left-[25%] bottom-[15%]"
         animate={{ x: ["-5vw", "5vw", "-5vw"], rotate: [0, 5, 0] }}
         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
       >
         <Terminal size={72} className="text-sky-300 opacity-20" />
       </motion.div>

       {/* 5. Veri Akışı (Yukarıdan Aşağıya Kod Şelalesi) */}
       <motion.div
         className="absolute left-[60%] top-[-10%] flex flex-col items-center opacity-30"
         animate={{ y: ["-20vh", "120vh"] }}
         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
       >
         <Code2 size={24} className="text-sky-400 mb-2" />
         <div className="w-[1px] h-[200px] bg-gradient-to-b from-sky-400/50 to-transparent" />
       </motion.div>

       {/* 6. Binary Veri Çizgisi (Aşağıdan Yukarıya) */}
       <motion.div
         className="absolute left-[40%] bottom-[-10%] flex flex-col items-center opacity-20"
         animate={{ y: ["120vh", "-20vh"] }}
         transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 5 }}
       >
         <div className="w-[1px] h-[150px] bg-gradient-to-t from-slate-400/50 to-transparent mb-2" />
         <span className="font-mono text-[10px] text-slate-500 whitespace-nowrap rotate-90 origin-bottom">01100011 01101111</span>
       </motion.div>

    </div>
  );
};

export default function Experience() {
  const [activeTab, setActiveTab] = useState("Tümü");

  const filtered = activeTab === "Tümü"
    ? experienceData
    : experienceData.filter(e => e.tags.includes(activeTab));

  return (
    <div id="deneyim" className="h-full w-full flex flex-col justify-center overflow-y-auto py-16 md:py-0 relative">
      <BackgroundTech />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full mt-10">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800">
            <svg viewBox="0 0 24 24" className="w-6 h-6" style={{ transform: "rotate(45deg)" }}>
              <path fill="currentColor" d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Deneyim</h2>
            <p className="text-sm text-slate-500">Profesyonel havacılık ve yazılım kariyerim.</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-200 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Experience list */}
        <div className="space-y-0 divide-y divide-slate-100">
          {filtered.map((item) => (
            <div
              key={item.title}
              className="group py-5 flex flex-col md:flex-row md:items-start gap-3 md:gap-8 hover:bg-white/60 -mx-4 px-4 rounded-xl transition-colors duration-300"
            >
              <div className="md:w-48 shrink-0">
                <p className="text-sm font-bold text-slate-900">{item.org}</p>
                <p className="text-xs text-slate-500 mt-1">{item.date}</p>
                {item.duration && <p className="text-xs text-slate-400">{item.duration}</p>}
              </div>
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-800 transition-colors duration-200 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                {item.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {item.skills.map(skill => (
                      <span key={skill} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
