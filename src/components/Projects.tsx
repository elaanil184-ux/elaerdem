"use client";

import { useRef } from "react";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

const projects = [
  {
    title: "Katipözet Masaüstü Uygulaması",
    desc: "Hukuk profesyonellerinin iş akışlarını hızlandırmak amacıyla geliştirilmiş yapay zeka destekli metin analiz ve özetleme platformu. Adli evrakları saniyeler içinde işleyerek en önemli detayları çıkarır, avukatlara zaman tasarrufu ve yüksek verimlilik sağlar.",
    features: [
      "Hukuk terminolojisine hakim özel dil modeli",
      "Saniyeler içinde sayfalara metin analizi ve özetleme",
      "Kullanıcı dostu, sade ve işlevsel masaüstü arayüzü"
    ],
    tech: ["Electron", "React", "Node.js", "TypeScript"]
  },
  {
    title: "Güvenli Hukuki Dikte",
    desc: "Hukuk büroları için özel olarak tasarlanmış, sesten metne dönüştürme (Speech-to-Text) sistemi. Hiçbir dış sunucu bağlantısı gerektirmeyen tamamen yerel (offline) mimarisi sayesinde, KVKK standartlarına tam uyum ve mutlak veri güvenliği sunar.",
    features: [
      "Tamamen yerel (offline) çalışan kapalı devre sistem",
      "Hassas veriler için kusursuz KVKK uyumluluğu",
      "Dış sızıntılara karşı %100 izole güvenlik altyapısı"
    ],
    tech: ["Whisper", "Python", "Local LLM"]
  },
  {
    title: "Argus",
    desc: "Okunması zor, taranmış veya karmaşık evrakları (PDF, TIFF, JPEG) yerel ortamda %85 doğruluk oranıyla sayısallaştıran otonom OCR motoru. Hassas verilerin sızmasını engellemek için tamamen izole çalışır.",
    features: [
      "Yerel ortamda %85 gibi yüksek OCR doğruluk oranı",
      "Her türlü görsel dosya ve taranmış evrak desteği",
      "KVKK standartlarında, dış ağlara tamamen kapalı yapı"
    ],
    tech: ["Python", "Tesseract OCR", "OpenCV", "PyTorch"]
  }
];

export default function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth * 0.5 : scrollLeft + clientWidth * 0.5;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div id="projeler" className="h-full w-full flex flex-col justify-center py-16 md:py-0 bg-white">
      <div className="max-w-6xl mx-auto w-full px-6 lg:px-8">
        
        {/* Başlık Alanı */}
        <div className="mb-6 flex items-end justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Projelerim</h2>
            <p className="text-sm text-slate-500 mt-1 font-medium">Geliştirdiğim yerel, güvenli ve performans odaklı yazılımlar.</p>
          </div>

          {/* Kaydırma Butonları */}
          <div className="hidden md:flex gap-2">
            <button onClick={() => scroll("left")} className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 transition-colors shadow-sm focus:outline-none">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll("right")} className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-200 text-slate-600 bg-white hover:bg-slate-50 transition-colors shadow-sm focus:outline-none">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Projeler Listesi (Carousel / Grid) */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white border border-slate-200 p-6 md:p-8 w-[85vw] md:w-[350px] lg:flex-1 lg:min-w-[300px] snap-center shrink-0 whitespace-normal rounded-xl shadow-[0_2px_15px_rgb(0,0,0,0.02)]"
            >
              <div className="flex-1">
                <h3 className="text-lg font-bold text-slate-900 mb-3 tracking-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                  {project.desc}
                </p>
                
                <div className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-slate-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-slate-700" />
                      </div>
                      <span className="text-sm text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 border-t border-slate-100 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-[11px] font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
