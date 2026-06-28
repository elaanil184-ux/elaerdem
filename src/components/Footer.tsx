export default function Footer() {
  return (
    <footer id="iletisim" className="scroll-mt-24 border-t-[3px] border-[#17140f] mt-10">
      <div className="max-w-6xl mx-auto px-5 lg:px-8 py-14">
        <div className="flex flex-col items-center text-center gap-6">
          <span className="font-pixel text-[10px] text-[#2f6df6] tracking-widest">05 / CONTACT</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-[#17140f]">
            Kodla. Üret. Keşfet.
          </h2>
          <p className="max-w-md text-[#17140f]/70">
            Birlikte bir şey inşa edelim. Bana ulaşmaktan çekinme.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a className="pixel-btn bg-[#2f6df6] text-white px-4 py-2 text-[10px] font-pixel" href="https://www.linkedin.com/in/ela-erdem/" target="_blank" rel="noreferrer">LINKEDIN</a>
            <a className="pixel-btn bg-[#fffdf6] px-4 py-2 text-[10px] font-pixel" href="https://github.com/elaerdem563-coder" target="_blank" rel="noreferrer">GITHUB</a>
            <a className="pixel-btn bg-[#e8453c] text-white px-4 py-2 text-[10px] font-pixel" href="mailto:elaerdem563@gmail.com">E-MAIL</a>
          </div>
          <a href="#hero" className="text-[11px] font-bold uppercase tracking-widest text-[#17140f]/60 mt-4">↑ Back to top</a>
        </div>
      </div>
      <div className="border-t-[3px] border-[#17140f] py-4 text-center text-[11px] text-[#17140f]/60">
        © 2026 Ela Erdem · Built with retro love
      </div>
    </footer>
  );
}
