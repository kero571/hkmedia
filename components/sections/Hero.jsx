import Image from "next/image";

// Mobile: full-screen background image.
// Desktop: two-column layout with a rounded image frame.
export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-[100dvh] overflow-hidden bg-navy text-white"
    >
      <div className="relative h-full lg:container-x lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:pb-8 lg:pt-20">
        {/* Hero Image */}
        <div className="absolute inset-0 lg:relative lg:inset-auto lg:order-2 lg:h-full lg:min-h-0 lg:self-stretch lg:overflow-hidden lg:rounded-[2rem] lg:border lg:border-white/10">
          <Image
            src="/profile.jpg"
            alt="مصور ومنتج محتوى مرئي بقبعة ونظارة شمسية — HK Media"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1023px) 100vw, 560px"
            className="object-cover object-[55%_15%]"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/10 to-navy lg:bg-gradient-to-t lg:from-navy/50 lg:via-transparent lg:to-transparent" />

          <span className="absolute right-4 top-[38%] flex animate-float items-center gap-2 rounded-full border border-white/15 bg-navy/70 px-4 py-2 text-xs font-bold text-goldLight backdrop-blur lg:right-6">
            <i className="block h-2 w-2 rounded-full bg-gold" />
            تصوير فوتوغرافي
          </span>

          <span className="absolute left-4 top-[46%] flex animate-float items-center gap-2 rounded-full border border-white/15 bg-navy/70 px-4 py-2 text-xs font-bold text-goldLight backdrop-blur [animation-delay:1s] lg:left-6">
            إنتاج فيديو
            <i className="block h-2 w-2 animate-blink rounded-full bg-red-500" />
          </span>
        </div>

        {/* Hero Content */}
        <div className="container-x relative z-10 flex h-full flex-col justify-end pb-[clamp(1rem,3svh,2rem)] pt-24 lg:order-1 lg:justify-center lg:!px-0 lg:pb-0 lg:pt-0">
          <span className="inline-flex animate-fadeUp items-center gap-2.5 self-start rounded-full border border-gold/40 bg-navy/60 px-4 py-1.5 text-xs font-bold text-goldLight backdrop-blur">
            <i className="block h-2 w-2 animate-blink rounded-full bg-red-500" />

            <span className="font-mono text-[11px] tracking-wider text-white">
              REC
            </span>

            <span className="text-white/40">•</span>
            إنتاج محتوى مرئي
          </span>

          <h1 className="mt-4 animate-fadeUp text-[clamp(1.5rem,5.8vw,2rem)] font-black leading-[1.32] [animation-delay:.08s] sm:text-3xl sm:leading-[1.3] lg:mt-5 lg:text-6xl lg:leading-[1.35]">
            نحوّل أفكارك إلى محتوى مرئي{" "}
            <span className="text-gold underline decoration-gold/60 decoration-2 underline-offset-[10px]">
              يلفت الأنظار.
            </span>
          </h1>

          <p className="mt-4 max-w-lg animate-fadeUp text-sm leading-7 text-white/70 [animation-delay:.16s] sm:text-base sm:leading-8 lg:mt-5">
            تصوير ومونتاج وإنتاج إعلانات للأفراد والبراندات والشركات، من الفكرة
            حتى المونتاج النهائي.
          </p>

          <div className="mt-5 grid animate-fadeUp grid-cols-2 gap-3 [animation-delay:.24s] sm:flex sm:flex-wrap lg:mt-7">
            <a href="#works" className="btn">
              شاهد أعمالنا
            </a>

            <a href="#contact" className="btn-ghost">
              احجز تصوير
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}