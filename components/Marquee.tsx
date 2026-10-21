import { categories } from "@/lib/content";

const items = [...categories, "Inspiración étnica", "Desde 2022", "Limache"];

export function Marquee() {
  return (
    <div className="wood-grain relative flex overflow-hidden border-y border-walnut/40 py-4 text-ivory sm:py-5">
      {[0, 1].map((track) => (
        <div key={track} aria-hidden={track === 1} className="flex shrink-0 animate-marquee items-center gap-10 whitespace-nowrap pr-10">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              <span className="font-display text-2xl font-medium italic text-ivory/95">{item}</span>
              <span className="text-oat/65">✦</span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
