"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("main-scroll-container");
      if (scrollContainer) {
        setScrolled(scrollContainer.scrollTop > 20);
      } else {
        setScrolled(window.scrollY > 20);
      }
    };
    
    const scrollContainer = document.getElementById("main-scroll-container");
    const target = scrollContainer || window;
    
    target.addEventListener('scroll', handleScroll, { passive: true });
    return () => target.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: "#hakkimda", label: "Hakkımda" },
    { href: "#deneyim", label: "Deneyim" },
    { href: "#projeler", label: "Projeler" },
    { href: "#egitim", label: "Eğitim" },
    { href: "#lisanslar", label: "Lisanslar" },
    { href: "#yetenekler", label: "Yetenekler" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/50 py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="text-xl font-black tracking-tighter text-slate-900 flex items-center gap-1">
          ELA<span className="text-slate-400 font-medium">ERDEM</span>
          <span className="w-2 h-2 rounded-full bg-slate-900 ml-0.5 mb-1"></span>
        </Link>

        <button
          className="md:hidden text-slate-900 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menü"
        >
          {isOpen ? '✕' : '☰'}
        </button>

        <nav className={`md:flex items-center gap-8 ${isOpen ? 'absolute top-full left-0 w-full bg-white flex flex-col p-6 border-b border-slate-200 shadow-lg gap-4' : 'hidden'}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors duration-200 uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#iletisim"
            onClick={(e) => scrollToSection(e, "#iletisim")}
            className="md:ml-2 px-5 py-2 text-xs font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-colors duration-200 uppercase tracking-widest shadow-sm"
          >
            İletişim
          </a>
        </nav>
      </div>
    </header>
  );
}
