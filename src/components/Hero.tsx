"use client";

import { useState } from "react";

export default function Hero() {
  const [speech, setSpeech] = useState("HOVER TO UNLOCK");

  return (
    <section id="hero" className="scroll-mt-20 pt-28 pb-16 px-5 lg:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        <div className="reveal in">
          <span className="pixel-tag px-3 py-1 text-[10px] font-pixel text-[#2f6df6]">PLAYER 1</span>
          <h1 className="font-pixel text-[#17140f] leading-[1.15] mt-5 text-4xl sm:text-5xl lg:text-6xl">
            ELA<br />ERDEM
          </h1>
          <p className="mt-5 font-pixel text-[10px] sm:text-[11px] text-[#17140f]/80 leading-relaxed">
            SOFTWARE DEVELOPER / AI PROJECTS /<br className="hidden sm:block" /> INTERACTIVE PRODUCTS
          </p>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#17140f]/75">
            Teknolojiyi insana fayda sağlayan, kullanıcı odaklı ve etkileşimli ürünlere dönüştürüyorum. Yapay zeka destekli sistemler ve modern web uygulamaları geliştiriyorum.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <a href="#projeler" className="pixel-btn bg-[#2f6df6] text-white px-5 py-3 text-[12px] font-bold uppercase tracking-wider">
              Projelerimi Keşfet
            </a>
            <a href="#iletisim" className="pixel-btn bg-[#fffdf6] text-[#e8453c] px-5 py-3 text-[12px] font-bold uppercase tracking-wider">
              İletişime Geç
            </a>
          </div>
          <a href="#projeler" className="anim-pulse inline-block mt-5 pixel-btn bg-[#f4c534] text-[#17140f] px-4 py-2 text-[10px] font-pixel">
            &gt; PRESS START
          </a>
        </div>

        <div className="reveal in" style= transitionDelay: "120ms" >
          <div
            className="pixel-box p-5 relative overflow-hidden"
            onMouseEnter={() => setSpeech("START HERE!")}
            onMouseLeave={() => setSpeech("HOVER TO UNLOCK")}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#e8453c] border-2 border-[#17140f]" />
              <span className="w-3 h-3 rounded-full bg-[#f4c534] border-2 border-[#17140f]" />
              <span className="w-3 h-3 rounded-full bg-[#2fa457] border-2 border-[#17140f]" />
              <span className="ml-auto font-pixel text-[9px] text-[#17140f]/50">ARCADE.EXE</span>
            </div>

            <div className="relative bg-[#eaf3ff] border-[3px] border-[#17140f] h-64 sm:h-72">
              <span className="anim-sparkle absolute top-5 left-8 text-[#2f6df6]">✦</span>
              <span className="anim-sparkle absolute top-10 right-12 text-[#f4c534]" style= animationDelay: ".6s" >✦</span>
              <span className="anim-sparkle absolute top-20 left-1/2 text-[#e8453c]" style= animationDelay: "1.1s" >✧</span>

              <div className="absolute top-4 right-4 pixel-box-sm px-2 py-1 font-pixel text-[8px]">{speech}</div>

              <div className="anim-qbounce absolute top-8 left-6 w-9 h-9 bg-[#f4c534] border-[3px] border-[#17140f] grid place-items-center font-pixel text-sm">?</div>

              <div className="absolute top-12 left-24 anim-coin w-6 h-6 rounded-full bg-[#f4c534] border-[3px] border-[#17140f]" />

              <div className="absolute bottom-8 right-10 w-7 h-24 flex flex-col justify-between">
                <span className="h-1 bg-[#17140f]" />
                <span className="h-1 bg-[#17140f]" />
                <span className="h-1 bg-[#17140f]" />
                <span className="h-1 bg-[#17140f]" />
                <span className="h-1 bg-[#17140f]" />
              </div>

              <div className="anim-float absolute bottom-7 left-10">
                <Mascot />
              </div>

              <div className="absolute bottom-0 left-0 w-full h-6 bg-[#2fa457] border-t-[3px] border-[#17140f]" />
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4">
              <MiniStat value="1000+" label="kullanıcı" />
              <MiniStat value="30K+" label="özet" />
              <MiniStat value="3" label="canlı ürün" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="pixel-box-sm px-2 py-2 text-center">
      <div className="font-pixel text-[11px]">{value}</div>
      <div className="text-[10px] text-[#17140f]/60 mt-1">{label}</div>
    </div>
  );
}

function Mascot() {
  return (
    <svg width="74" height="74" viewBox="0 0 16 16" shapeRendering="crispEdges">
      <rect x="7" y="0" width="2" height="2" fill="#17140f" />
      <rect x="3" y="2" width="10" height="8" fill="#2fa457" stroke="#17140f" strokeWidth="0.5" />
      <rect x="5" y="4" width="2" height="2" fill="#17140f" />
      <rect x="9" y="4" width="2" height="2" fill="#17140f" />
      <rect x="5" y="7" width="6" height="1" fill="#17140f" />
      <rect x="4" y="10" width="8" height="4" fill="#2f6df6" stroke="#17140f" strokeWidth="0.5" />
      <rect x="2" y="11" width="2" height="2" fill="#2f6df6" stroke="#17140f" strokeWidth="0.5" />
      <rect x="12" y="11" width="2" height="2" fill="#2f6df6" stroke="#17140f" strokeWidth="0.5" />
    </svg>
  );
}
