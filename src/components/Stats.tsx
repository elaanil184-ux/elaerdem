import Reveal from "@/components/Reveal";

const STATS = [
  { v: "1.000+", l: "Kullanıcı", bar: "bg-[#2f6df6]" },
  { v: "30.000+", l: "Özet Oluşturuldu", bar: "bg-[#e8453c]" },
  { v: "3", l: "Canlı Ürün", bar: "bg-[#2fa457]" },
  { v: "24/7", l: "Sürekli Üretim", bar: "bg-[#f4c534]" },
];

export default function Stats() {
  return (
    <section className="py-8 px-5 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-5">
        {STATS.map((s, i) => (
          <Reveal key={s.l} delay={i * 100}>
            <div className="pixel-box text-center py-6 px-3 h-full">
              <div className={`h-2 w-10 mx-auto mb-3 ${s.bar}`} />
              <div className="font-pixel text-lg sm:text-xl">{s.v}</div>
              <div className="text-[11px] uppercase tracking-widest text-[#17140f]/60 mt-2">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
