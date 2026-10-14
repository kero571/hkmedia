import SectionHeading from "../ui/SectionHeading";
import { STEPS } from "@/data/content";

export default function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="section container-x defer">
      <SectionHeading id="process-title" eyebrow="03 // طريقة عملنا"
        title={<>مسار متكامل نحو <span className="text-gold">الإتقان.</span></>}
        text="منهجية دقيقة وموثوقة من المودبوردات الأولى وحتى تدرجات الألوان النهائية." />
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {STEPS.map((s) => (
          <li key={s.n} className="min-w-0 rounded-3xl border border-gold/20 bg-paper p-6 shadow-sm sm:p-7">
            <span className="block text-4xl font-black text-gold" aria-hidden="true">{s.n}</span>
            <h3 className="mb-3 mt-4 text-lg font-extrabold">{s.title}</h3>
            <p className="text-sm leading-7 text-ink/60">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
