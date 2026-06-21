"use client";

import { Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      <section id="iletisim" className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-800/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Birlikte harika işler çıkaralım.
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            Havacılık operasyonları, teknoloji girişimleri veya vizyoner projeler için iletişime geçebilirsiniz. Gelin geleceği birlikte kodlayalım.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:ela@elaerdem.com"
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-sm font-bold text-slate-900 bg-white rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-4 h-4" />
              Bana E-Posta Gönder
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="https://linkedin.com/in/ela-erdem-22a009251/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 text-sm font-bold text-white border-2 border-slate-700 rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn'de Bağlan
            </a>
          </div>
        </div>
      </section>

      {/* Bottom bar */}
      <footer className="bg-slate-950 py-8">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-medium text-slate-500">
            © {new Date().getFullYear()} Ela Erdem. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://linkedin.com/in/ela-erdem-22a009251/" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-500 hover:text-white uppercase tracking-wider transition-colors">
              LinkedIn
            </a>
            <a href="mailto:ela@elaerdem.com" className="text-xs font-bold text-slate-500 hover:text-white uppercase tracking-wider transition-colors">
              E-Posta
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
