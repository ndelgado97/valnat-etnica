import type { Product } from "@/lib/content";

const shapes: Record<Product["shape"], JSX.Element> = {
  aros: (
    <g>
      <path d="M34 30c0 10-8 14-8 25 0 12 9 22 20 22s20-10 20-22c0-11-8-15-8-25" />
      <circle cx="46" cy="26" r="5" />
      <path d="M46 36v8M36 54l10 14 10-14-10-10z" />
    </g>
  ),
  anillo: (
    <g>
      <ellipse cx="50" cy="70" rx="24" ry="15" />
      <path d="M34 62l7-23h18l7 23M41 39l9-11 9 11-9 10z" />
      <path d="M41 39l9 10 9-10M50 28v21" />
    </g>
  ),
  collar: (
    <g>
      <path d="M26 20c0 28 11 50 24 50s24-22 24-50" />
      <path d="M20 20h8M72 20h8" />
      <circle cx="50" cy="80" r="10" />
      <circle cx="50" cy="80" r="3.5" />
    </g>
  ),
  accesorio: (
    <g>
      <path d="M30 43h40l6 47H24zM40 43c0-10 4-16 10-16s10 6 10 16" />
      <path d="M30 58h40" />
      <circle cx="50" cy="68" r="3" />
    </g>
  ),
};

const tones: Record<Product["shape"], string> = {
  aros: "from-oat via-sand to-linen",
  anillo: "from-ink/15 via-oat to-linen",
  collar: "from-sage/30 via-sand to-linen",
  accesorio: "from-terracotta/25 via-sand to-linen",
};

export function ProductVisual({ product }: { product: Product }) {
  return (
    <div className={`paper-grain relative h-full w-full bg-gradient-to-br ${tones[product.shape]}`}>
      <div className="absolute inset-x-8 bottom-8 h-px bg-walnut/15" />
      <svg
        viewBox="0 0 100 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute inset-0 m-auto h-[68%] w-[68%] text-walnut/75 transition-transform duration-700 group-hover:scale-105"
        aria-hidden
      >
        {shapes[product.shape]}
      </svg>
    </div>
  );
}
