import { Reveal } from "./Reveal";

type Props = { index?: string; eyebrow: string; title: React.ReactNode; description?: string; align?: "left" | "center"; inverse?: boolean; className?: string };

export function SectionHeading({ index, eyebrow, title, description, align = "left", inverse = false, className = "" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}>
      <div className={`mb-5 flex items-center gap-4 ${centered ? "justify-center" : ""}`}>
        <span className={`h-px w-12 ${inverse ? "bg-oat/50" : "bg-leather"}`} />
        <span className={`text-[11px] font-medium uppercase tracking-wide2 ${inverse ? "text-oat" : "text-walnut"}`}>{index ? `${index} — ` : ""}{eyebrow}</span>
        {centered && <span className={`h-px w-12 ${inverse ? "bg-oat/50" : "bg-leather"}`} />}
      </div>
      <h2 className={`font-display text-[2.6rem] font-medium leading-[1.02] tracking-[-0.025em] sm:text-5xl lg:text-6xl ${inverse ? "text-ivory" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mt-4 text-base font-light leading-relaxed sm:mt-5 sm:text-lg ${inverse ? "text-sand/80" : "text-muted"}`}>{description}</p>}
    </Reveal>
  );
}
