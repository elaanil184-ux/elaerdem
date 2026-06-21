"use client";

import { CheckCircle2 } from "lucide-react";

const licensesData = [
  {
    title: "İHA0123",
    issuer: "SHGM / Sivil Havacılık Genel Müdürlüğü",
    icon: "🛸",
  },
  {
    title: "IR(A) Aletli Uçuş Yetkisi",
    issuer: "SHGM / Sivil Havacılık Genel Müdürlüğü",
    icon: "🛩️",
  },
  {
    title: "CPL(A) Ticari Pilot Lisansı",
    issuer: "SHGM / Sivil Havacılık Genel Müdürlüğü",
    icon: "✈️",
  },
  {
    title: "PPL (Hususi Pilot Lisansı)",
    issuer: "SHGM / Sivil Havacılık Genel Müdürlüğü",
    icon: "🪂",
  },
  {
    title: "Frontend & Backend Web Development",
    issuer: "BTK Akademi · Oca 2024",
    icon: "💻",
  },
];

export default function Licenses() {
  return (
    <div id="lisanslar" className="h-full w-full flex flex-col justify-center overflow-y-auto py-16 md:py-0 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 w-full mt-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Lisanslar & Sertifikalar</h2>
            <p className="text-sm text-slate-500">Resmi kurumlarca verilen profesyonel yetki belgelerim.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-10">
          {licensesData.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl p-6 transition-all duration-300 hover:border-slate-400"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-sm font-bold text-slate-900 mb-3 leading-snug">{item.title}</h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                {item.issuer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
