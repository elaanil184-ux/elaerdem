import Reveal from "@/components/Reveal";
import SectionHead from "@/components/SectionHead";

const SKILLS = [
  { n: "Python", p: 88, c: "#2f6df6" },
  { n: "TypeScript", p: 82, c: "#e8453c" },
  { n: "React", p: 85, c: "#2f6df6" },
  { n: "Next.js", p: 80, c: "#17140f" },
  { n: "Node.js", p: 76, c: "#2fa457" },
  { n: "AI / LLM", p: 72, c: "#f4c534" },
  { n: "UI / UX", p: 74, c: "#e8453c" },
];

export default function Skills() {
  return (
    <section id="yetenekler" className="scroll-mt-24 py-16 px-5 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHead
          eyebrow="03 / SKILLS"
          title="Yetenekler"
          desc="Ürün geliştirirken en sık kullandığım teknolojiler."
        />

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mt-10">
          {SKILLS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-[#17140f]">{s.n}</span>
                <span className="font-pixel text-[10px] text-[#17140f]/60">{s.p}%</span>
              </div>
              <div className="skill-track">
                <div
                  className="skill-fill"
                  style={{ ["--pct"]: `${s.p}%`, color: s.c } as React.CSSProperties}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
