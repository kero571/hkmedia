import { STATS } from "@/data/content";

export default function Stats() {
  return (
    <section aria-label="إنجازاتنا بالأرقام" className="bg-sand/70 py-9 md:py-12">
      <dl className="container-x grid max-w-3xl grid-cols-3 divide-x divide-x-reverse divide-ink/10">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col-reverse items-center px-2 text-center">
            <dt className="mt-1 text-[11px] text-ink/55 sm:text-sm">{s.label}</dt>
            <dd className="text-3xl font-black sm:text-5xl"><span className="text-gold">+</span>{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
