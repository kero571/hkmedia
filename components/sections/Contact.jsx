import Icon from "../ui/Icon";
import { SITE } from "@/lib/site";
import { SOCIALS } from "@/data/content";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="section defer bg-gradient-to-b from-cream to-sand/80"
    >
      <div className="container-x text-center">
        <p className="eyebrow">06 // لنصنع معاً</p>
        <h2 id="contact-title" className="h2 mx-auto max-w-3xl">
          لديك فكرة؟ لنحوّلها إلى محتوى{" "}
          <span className="text-gold">لا يمكن تجاوزه.</span>
        </h2>
        <p className="lead">
          راسلنا اليوم واحصل على خطة وعرض سعر واضحين خلال 24 ساعة.
        </p>
        <div className="mx-auto mt-9 grid w-full max-w-3xl gap-3 sm:grid-cols-2">
          {/* WhatsApp Button */}
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full flex-col items-center justify-center gap-3 rounded-[2rem] bg-gradient-to-l from-gold via-goldLight to-gold p-4 text-navy shadow-xl shadow-gold/20 transition hover:-translate-y-0.5 sm:flex-row sm:justify-between sm:rounded-full sm:px-6 sm:py-4"
          >
            <span className="flex items-center gap-3 text-base font-extrabold">
              <Icon name="whatsapp" className="h-7 w-7" />
              احجز عبر واتساب
            </span>

            <span
              className="rounded-full bg-navy/10 px-4 py-2 font-mono text-sm font-bold"
              dir="ltr"
            >
              {SITE.phoneDisplay}
            </span>
          </a>

          {/* Call Button */}
          <a
            href={`tel:${SITE.phoneDisplay.replace(/[^\d+]/g, "")}`}
            className="flex w-full items-center justify-center gap-3 rounded-[2rem] border border-ink/10 bg-paper p-4 text-ink shadow-sm transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10 sm:rounded-full sm:px-6 sm:py-4"
            aria-label={`اتصل بنا على ${SITE.phoneDisplay}`}
          >
            <Icon name="phone" className="h-6 w-6 text-gold" />

            <span className="text-base font-extrabold">اتصل بنا الآن</span>

            <span className="font-mono text-sm text-ink/60" dir="ltr">
              {SITE.phoneDisplay}
            </span>
          </a>
        </div>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {SOCIALS.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-paper text-ink/80 shadow-sm transition hover:-translate-y-0.5 hover:bg-gold hover:text-navy"
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
