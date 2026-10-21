import { Reveal } from "./Reveal";
import { values } from "@/lib/content";

const icons = [
  <path key="1" d="M12 3l2.4 5.3L20 11l-5.6 2.7L12 19l-2.4-5.3L4 11l5.6-2.7z" />,
  <path key="2" d="M20 11.5a8 8 0 0 1-11.8 7L3 20l1.5-5A8 8 0 1 1 20 11.5Z" />,
  <path key="3" d="M4 5h6v6H4zM14 5h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />,
  <path key="4" d="M4 21V8l8-5 8 5v13M9 21v-6h6v6" />,
];

export function Values() {
  return (
    <section className="bg-ivory py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <div className="group h-full bg-ivory p-7 transition-colors hover:bg-linen sm:p-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-walnut transition-transform group-hover:scale-110" aria-hidden>{icons[i]}</svg>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink sm:mt-6">{value.title}</h3>
                <p className="mt-3 text-base font-light leading-relaxed text-muted">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
