import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { WHY } from "@/data/content";

export default function Why() {
  return (
    <section aria-labelledby="why-title" className="defer bg-navy bg-[radial-gradient(60%_50%_at_20%_0%,rgba(209,163,68,.22),transparent_70%)] text-white">
      <div className="section container-x">
        <SectionHeading id="why-title" dark eyebrow="04 // معيار HK" title={<>جودة تبدو فاخرة. <span className="text-gold">وأسعار منطقية.</span></>} />
        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {WHY.map((w) => (
            <article key={w.title} className="min-w-0 rounded-3xl border border-white/10 bg-white/[0.06] p-6 sm:p-8">
              <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/25 text-gold"><Icon name={w.icon} className="h-6 w-6" /></span>
              <h3 className="mb-3 text-lg font-extrabold sm:text-xl">{w.title}</h3>
              <p className="text-sm leading-7 text-white/65">{w.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
