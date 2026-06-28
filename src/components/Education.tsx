import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

type Level = {
  lvl: string;
  icon: string;
  title: string;
  sub: string;
  status: string;
  statusColor: string;
  desc: string;
  highlight: boolean;
};

const LEVELS: Level[] = [
  {
    lvl: "01",
    icon: "✈",
    title: "Özyeğin Üniversitesi",
    sub: "Pilotaj / Aviation",
    status: "DEVAM EDIYOR",
    statusColor: "#2f6df6",
    desc: "Havacılık disiplini, hızlı karar verme, sorumluluk ve operasyonel düşünme.",
    highlight: false,
  },
  {
    lvl: "02",
    icon: "💻",
    title: "Bilgisayar Mühendisliği",
    sub: "Software & AI",
    status: "DEVAM EDIYOR",
    statusColor: "#2fa457",
    desc: "Yazılım geliştirme, algoritmalar, veri yapıları, backend sistemler, web ve yapay zeka.",
    highlight: true,
  },
  {
    lvl: "03",
    icon: "💼",
    title: "İstanbul Üniversitesi",
    sub: "İşletme / Business",
    status: "MEZUN",
    statusColor: "#e8453c",
    desc: "İş geliştirme, girişimcilik ve kullanıcı odaklı düşünme.",
    highlight: false,
  },
];

export default function Education() {
  return (
    <section id="egitim" className="scroll-mt-24 py-16 px-5 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHead
          eyebrow="04 / TRAINING LOG"
          title="Eğitim Yolculuğum"
          desc="Pilotaj disipliniyle analitik düşünmeyi, bilgisayar mühendisliğiyle teknik üretimi, işletme eğitimiyle ürün ve kullanıcı odağını birleştiriyorum."
        />

        <div className="grid md:grid-cols-3 gap-7 mt-10">
          {LEVELS.map((lv, i) => (
            <Reveal key={lv.lvl} delay={i * 120}>
              <div className={`proj-card pixel-box h-full p-5 ${lv.highlight ? "bg-[#fff7d6]" : ""}`}>
                <div className="flex items-center justify-between">
                  <span className="font-pixel text-[10px] text-[#17140f]/50">LEVEL {lv.lvl}</span>
                  <span className="text-2xl">{lv.icon}</span>
                </div>
                <h3 className="font-bold text-lg mt-3 text-[#17140f]">{lv.title}</h3>
                <p className="text-sm text-[#17140f]/60">{lv.sub}</p>
                <span
                  className="pixel-tag font-pixel text-[9px] px-2 py-1 mt-3"
                  style= color: lv.statusColor 
                >
                  {lv.status}
                </span>
                <p className="text-sm text-[#17140f]/75 leading-relaxed mt-3">{lv.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
