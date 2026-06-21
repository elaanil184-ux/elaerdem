"use client";

import { GraduationCap } from "lucide-react";

const educationData = [
  {
    school: "Özyeğin Üniversitesi",
    program: "Havayolu / Ticari / Profesyonel Pilotaj",
    date: "2022 – Devam ediyor",
    gpa: "3.95 / 4.00",
    icon: "✈️",
    badge: "Tam Burslu",
  },
  {
    school: "Özyeğin Üniversitesi",
    program: "Çift Anadal · Bilgisayar Mühendisliği",
    date: "2023 – Devam ediyor",
    gpa: "3.96 / 4.00",
    icon: "💻",
    badge: "Tam Burslu",
  },
  {
    school: "İstanbul Üniversitesi",
    program: "İşletme (Business Administration)",
    date: "2023 – 2025",
    gpa: "",
    icon: "📊",
    badge: "",
  },
  {
    school: "InterCockpit Flight School Germany",
    program: "Test Pilotu",
    date: "",
    gpa: "",
    icon: "🇩🇪",
    badge: "",
  },
  {
    school: "TÜBİTAK — Project on Dynamics",
    program: "İkincilik Ödülü",
    date: "2016 – 2017",
    gpa: "",
    icon: "🏆",
    badge: "İkincilik",
  },
  {
    school: "Amerikan Kültür Derneği",
    program: "Dil Eğitimi",
    date: "2011 – 2016",
    gpa: "",
    icon: "🇺🇸",
    badge: "",
  },
  {
    school: "TED Rönesans Koleji",
    program: "Lise · Maltepe, İstanbul",
    date: "",
    gpa: "",
    icon: "🎓",
    badge: "",
  },
];

export default function Education() {
  return (
    <div id="egitim" className="h-full w-full flex flex-col justify-center overflow-y-auto py-16 md:py-0 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full mt-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Eğitim</h2>
            <p className="text-sm text-slate-500">Akademik geçmişim ve derecelerim.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-8 mt-6">
          {educationData.map((item, index) => (
            <div key={index} className="flex flex-col p-4 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-colors duration-200">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{item.icon}</span>
                  <h3 className="text-sm font-bold text-slate-900">{item.school}</h3>
                </div>
                {item.date && <span className="text-[10px] font-medium text-slate-500">{item.date}</span>}
              </div>
              
              <p className="text-xs font-medium text-slate-600 mb-3 flex-1">{item.program}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.badge && (
                  <span className="text-[10px] font-bold text-slate-700 bg-white px-2 py-0.5 rounded border border-slate-200">
                    {item.badge}
                  </span>
                )}
                {item.gpa && (
                  <span className="text-[10px] font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200 shadow-sm">
                    Not: {item.gpa}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
