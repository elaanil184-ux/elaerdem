import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

type Project = {
  name: string;
  bar: string;
  desc: string;
  metrics: { v: string; l: string }[];
  tech: string[];
};

const PROJECTS: Project[] = [
  {
    name: "KatipÖzet",
    bar: "bg-[#2f6df6]",
    desc: "Yapay zeka destekli hukuki belge özetleme platformu. OCR ve hukuki hesaplama araçlarıyla iş yükünü azaltır.",
    metrics: [
      { v: "30.000+", l: "özet" },
      { v: "1.000+", l: "kullanıcı" },
    ],
    tech: ["NEXT.JS", "TYPESCRIPT", "NODE.JS", "LLM"],
  },
  {
    name: "Miandela",
    bar: "bg-[#e8453c]",
    desc: "Kişiselleştirilmiş dijital içerik ve etkileşimli ürün platformu. Kullanıcı deneyimi odaklı tasarım.",
    metrics: [
      { v: "UX", l: "odaklı" },
      { v: "Web", l: "platform" },
    ],
    tech: ["REACT", "TYPESCRIPT", "TAILWIND", "SUPABASE"],
  },
  {
    name: "Ucuz Uçak",
    bar: "bg-[#f4c534]",
    desc: "Uçuş fırsatlarını ve uygun fiyatları bulmayı kolaylaştıran arama ve otomasyon platformu.",
    metrics: [
      { v: "Auto", l: "veri toplama" },
      { v: "Live", l: "arama" },
    ],
    tech: ["PYTHON", "SCRAPY", "REACT"],
  },
];

export default function Projects() {
  return (
    <section id="projeler" className="scroll-mt-24 py-16 px-5 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          eyebrow="02 / PROJECTS"
          title="Öne Çıkan Projeler"
          desc="Gerçek kullanıcılarla buluşmuş, uçtan uca geliştirdiğim canlı ürünler."
        />

        <div className="grid md:grid-cols-3 gap-7 mt-10">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article className="proj-card pixel-box h-full flex flex-col">
                <div className={`h-2 ${p.bar}`} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-lg text-[#17140f]">{p.name}</h3>
                    <span className="pixel-tag font-pixel text-[8px] px-2 py-1 gap-1">
                      <span className="w-2 h-2 bg-[#2fa457] border border-[#17140f]" /> CANLI
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-[#17140f]/70 leading-relaxed flex-1">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    {p.metrics.map((m) => (
                      <div key={m.l} className="pixel-box-sm px-2 py-2 text-center">
                        <div className="font-pixel text-[11px]">{m.v}</div>
                        <div className="text-[10px] text-[#17140f]/60 mt-1">{m.l}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t) => (
                      <span key={t} className="pixel-tag font-pixel text-[8px] px-2 py-1">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
