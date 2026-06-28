type Props = {
  eyebrow: string;
  title: string;
  desc?: string;
};

export default function SectionHead({ eyebrow, title, desc }: Props) {
  return (
    <div className="max-w-2xl">
      <span className="font-pixel text-[10px] text-[#2f6df6] tracking-widest">
        {eyebrow}
      </span>
      <h2 className="text-2xl sm:text-3xl font-extrabold mt-3 text-[#17140f]">
        {title}
      </h2>
      {desc ? (
        <p className="mt-3 text-[#17140f]/70 leading-relaxed">{desc}</p>
      ) : null}
      <div className="pixel-divider mt-5" />
    </div>
  );
}
