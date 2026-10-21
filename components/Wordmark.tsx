// Wordmark "VALNAT" reconstruido con letras geométricas monolineales,
// fiel al estilo angular del logo (A triangulares, trazos rectos).
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 208 46"
      className={className}
      role="img"
      aria-label="VALNAT"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="square"
      strokeLinejoin="miter"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* V */}
      <polyline points="6,6 17,40 28,6" />
      {/* A */}
      <polyline points="42,40 53,6 64,40" />
      {/* L */}
      <polyline points="78,6 78,40 94,40" />
      {/* N */}
      <polyline points="108,40 108,6 130,40 130,6" />
      {/* A */}
      <polyline points="144,40 155,6 166,40" />
      {/* T */}
      <line x1="180" y1="6" x2="202" y2="6" />
      <line x1="191" y1="6" x2="191" y2="40" />
    </svg>
  );
}
