// Isotipo Valnat: "C" abierta con punto central.
export function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label="Valnat"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M72 11.9 A44 44 0 1 0 72 88.1"
        stroke="currentColor"
        strokeWidth="9.5"
        strokeLinecap="butt"
        fill="none"
      />
      <circle cx="51" cy="50" r="7" fill="currentColor" />
    </svg>
  );
}
