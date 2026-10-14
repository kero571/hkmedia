import { TICKER } from "@/data/content";

export default function Ticker() {
  const loop = [...TICKER, ...TICKER];
  return (
    <div aria-hidden="true" className="overflow-hidden bg-gradient-to-l from-gold via-goldLight to-gold py-3.5 text-navy">
      <ul className="flex w-max animate-marquee">
        {loop.map((t, i) => (
          <li key={i} className="flex shrink-0 items-center text-sm font-extrabold">
            <span className="px-6 sm:px-9">{t}</span>
            <i className="block h-1.5 w-1.5 rounded-full bg-navy/50" />
          </li>
        ))}
      </ul>
    </div>
  );
}
