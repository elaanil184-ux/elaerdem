"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#projeler", label: "Projeler" },
  { href: "#yetenekler", label: "Yetenekler" },
  { href: "#egitim", label: "Eğitim" },
  { href: "#iletisim", label: "İletişim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#f3eddd]/95 backdrop-blur border-b-[3px] border-[#17140f]"
          : "border-b-[3px] border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" onClick={(e) => go(e, "#hero")} className="flex items-center gap-3">
          <span className="w-7 h-7 grid place-items-center bg-[#e8453c] border-[3px] border-[#17140f] text-white text-[10px] font-pixel">
            E
          </span>
          <span className="leading-none">
            <span className="block font-pixel text-sm tracking-tight">ELA ERDEM</span>
            <span className="block text-[10px] tracking-[0.2em] text-[#17140f]/60 mt-1">
              CODE • CREATE • PLAY
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="nav-link text-[11px] font-bold uppercase tracking-widest text-[#17140f]/75 hover:text-[#17140f]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="pixel-tag px-2 py-1 text-[10px] font-pixel gap-1">
            <span className="w-2.5 h-2.5 bg-[#f4c534] border-2 border-[#17140f]" /> XP 3200
          </span>
          <a
            href="https://www.linkedin.com/in/ela-erdem/"
            target="_blank"
            rel="noreferrer"
            className="pixel-btn bg-[#2f6df6] text-white px-3 py-2 text-[10px] font-bold uppercase tracking-widest"
          >
            CV İndir
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden pixel-box-sm w-9 h-9 grid place-items-center text-lg"
          aria-label="Menü"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open ? (
        <div className="md:hidden bg-[#f3eddd] border-b-[3px] border-[#17140f] px-5 py-4 flex flex-col gap-3">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => go(e, l.href)}
              className="text-xs font-bold uppercase tracking-widest text-[#17140f]/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://www.linkedin.com/in/ela-erdem/"
            target="_blank"
            rel="noreferrer"
            className="pixel-btn bg-[#2f6df6] text-white px-3 py-2 text-[10px] font-bold uppercase tracking-widest w-max"
          >
            CV İndir
          </a>
        </div>
      ) : null}
    </header>
  );
}
