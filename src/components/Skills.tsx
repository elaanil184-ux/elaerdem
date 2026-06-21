"use client";

import { Code2 } from "lucide-react";

const languages = [
  { name: "İngilizce", level: "SHGM Onaylı & Profesyonel", pct: 95, detail: "Havacılık İngilizcesi, Akademik Yeterlilik" },
  { name: "Almanca", level: "Orta Düzey (B1)", pct: 60, detail: "Günlük ve Sınırlı Profesyonel İletişim" },
  { name: "İspanyolca", level: "Başlangıç (A2)", pct: 25, detail: "Temel İletişim" },
];

const skillCategories = [
  {
    title: "Yazılım & Web Geliştirme",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Python", "Java", "C++", "Tailwind CSS"]
  },
  {
    title: "Veritabanı, Cloud & Araçlar",
    skills: ["Supabase", "PostgreSQL", "Firebase", "Vercel", "Git & GitHub", "REST API"]
  },
  {
    title: "Havacılık & Operasyon",
    skills: ["Uçuş Dinamikleri", "Havacılık Meteorolojisi", "Aletli Uçuş (IFR)", "Kriz Yönetimi", "CRM (Crew Resource Management)", "İHA Operasyonları"]
  }
];

export default function Skills() {
  return (
    <div id="yetenekler" className="h-full w-full flex flex-col justify-center overflow-y-auto py-16 md:py-0 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full mt-10">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 shrink-0">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Yetenekler & Diller</h2>
            <p className="text-sm text-slate-500 mt-1">Teknik beceriler, operasyonel yetkinlikler ve konuşulan diller.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 pb-10">
          {/* Sol Kolon: Beceriler */}
          <div className="space-y-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-400 hover:bg-white hover:text-slate-900 transition-all duration-200 cursor-default shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sağ Kolon: Diller */}
          <div>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
              Yabancı Diller
            </h3>
            <div className="space-y-8 mt-6">
              {languages.map((lang) => (
                <div key={lang.name} className="group">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end mb-2 gap-1">
                    <div>
                      <span className="text-base font-bold text-slate-800 block">{lang.name}</span>
                      <span className="text-[10px] text-slate-500 font-semibold">{lang.detail}</span>
                    </div>
                    <span className="text-xs text-slate-700 font-bold bg-slate-100 px-2 py-1 rounded w-fit">
                      {lang.level}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div
                      style={{ width: `${lang.pct}%` }}
                      className="h-full bg-slate-900 rounded-full transition-all duration-1000 ease-out"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
