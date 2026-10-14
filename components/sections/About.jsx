import Image from "next/image";
import { BULLETS } from "@/data/content";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="section container-x defer">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">05 // من نحن</p>
          <h2 id="about-title" className="h2">رواة قصص شغوفون <span className="text-gold">بالوضوح الإبداعي.</span></h2>
          <div className="mt-6 space-y-4 text-sm leading-8 text-ink/65 sm:text-base">
            <p><strong className="text-ink">إتش كيه ميديا</strong> منصة متخصصة في صناعة المحتوى المرئي. نحول أفكار عملائنا إلى محتوى بصري إبداعي يلفت الانتباه، ويعكس هوية العلامة التجارية، ويساعدها على الوصول إلى جمهورها بأفضل شكل، مع الجمع بين الجودة العالية والتكلفة المناسبة.</p>
            <p>سواء كان الأمر يتعلق بتوثيق معماري للعقارات، أو إبراز فخامة تفاصيل منتج مادي، أو إنتاج ريلز ديناميكية لمنصات التواصل، يقدم استوديونا إضاءة مدروسة وزوايا سينمائية ولمسة تحرير عصرية لكل مشروع.</p>
          </div>
          <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-ink/10 pt-6 text-sm font-bold">
            {BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-2.5"><i className="block h-2 w-2 rounded-full bg-gold" />{b}</li>
            ))}
          </ul>
        </div>

        <figure className="relative mx-auto w-full max-w-md rounded-[2rem] bg-paper p-3 shadow-2xl shadow-gold/10 lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
            <Image src="/profile.jpg" alt="استوديو HK ميديا — إخراج بصري ومونتاج" fill sizes="(max-width: 1023px) 90vw, 520px" loading="lazy" className="object-cover object-[55%_30%]" />
            <i className="corner left-3 top-3 border-l-2 border-t-2" />
            <i className="corner right-3 top-3 border-r-2 border-t-2" />
            <figcaption className="absolute inset-x-4 bottom-4 rounded-2xl bg-navy/90 px-5 py-3 text-center text-white backdrop-blur">
              <span className="block text-sm font-extrabold">استوديو HK ميديا</span>
              <span className="block text-xs text-gold">إخراج بصري ومونتاج</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
