import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { SERVICES } from "@/data/content";

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="section container-x defer">
      <SectionHeading id="services-title" eyebrow="01 // ماذا نقدم"
        title={<>من الفكرة الأولى حتى <span className="text-gold">اللقطة الأخيرة.</span></>}
        text="صور وفيديوهات ذات تأثير بصري عالي وسرد سينمائي يعزز حضور علامتك التجارية." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {SERVICES.map((s) => (
          <article key={s.title} className="min-w-0 rounded-3xl border border-gold/20 bg-paper p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/60 hover:shadow-lg sm:p-8">
            <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-gold"><Icon name={s.icon} className="h-6 w-6" /></span>
            <h3 className="mb-3 text-lg font-extrabold leading-snug sm:text-xl">{s.title}</h3>
            <p className="text-sm leading-7 text-ink/60">{s.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
