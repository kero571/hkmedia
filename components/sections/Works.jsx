"use client";

import { memo, useCallback, useMemo, useState, useTransition } from "react";
import Image from "next/image";
// عدّل المسار حسب مكان ملف الكونتنت عندك
import { FILTERS, WORKS } from "@/data/content";

/* ---------- Loader ---------- */
function Spinner({ className = "" }) {
  return (
    <span
      role="status"
      aria-label="جاري التحميل"
      className={`block h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-[#d9a62e] ${className}`}
    />
  );
}

/* ---------- Card ---------- */
const WorkCard = memo(function WorkCard({ item, isActive, onPlay, onEnd }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [buffering, setBuffering] = useState(true);

  return (
    <article
      // aspect-ratio ثابت = صفر CLS
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-[#d9cbb3] shadow-lg shadow-black/10"
    >
      {/* Skeleton loader لحد ما الكوفر يحمّل */}
      {!imgLoaded && !imgError && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#d9cbb3] via-[#e8dcc6] to-[#d9cbb3]" />
      )}

      {isActive ? (
        <>
          <video
            className="absolute inset-0 h-full w-full bg-black object-cover"
            src={item.src}
            poster={item.cover}
            autoPlay
            controls
            playsInline
            preload="auto"
            onCanPlay={() => setBuffering(false)}
            onPlaying={() => setBuffering(false)}
            onWaiting={() => setBuffering(true)}
            onEnded={onEnd}
            onError={onEnd}
          />
          {buffering && (
            <div className="pointer-events-none absolute inset-0 grid place-items-center bg-black/30">
              <Spinner />
            </div>
          )}
        </>
      ) : (
        <button
          type="button"
          onClick={() => onPlay(item.id)}
          aria-label={`تشغيل ${item.title}`}
          className="absolute inset-0 block h-full w-full cursor-pointer focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-[-4px] focus-visible:outline-[#d9a62e]"
        >
          {!imgError && (
            <Image
              src={item.cover}
              alt={item.title}
              fill
              sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
              quality={70}
              className={`object-cover transition-opacity duration-300 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgError(true)}
            />
          )}

          {/* تدرج خفيف عشان النص يبان */}
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />

          {/* زرار التشغيل */}
          <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#d9a62e] shadow-xl transition-transform duration-200 group-hover:scale-110 sm:h-16 sm:w-16">
            <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-[1px] fill-[#1f2430]" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>

          <span className="absolute bottom-4 start-4 text-sm font-bold text-white drop-shadow">
            {item.title}
          </span>
          <span className="absolute bottom-4 end-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#1f2430]">
            {item.label}
          </span>
        </button>
      )}
    </article>
  );
});

/* ---------- Section ---------- */
export default function Works() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);
  const [isPending, startTransition] = useTransition();

  const items = useMemo(
    () => (filter === "all" ? WORKS : WORKS.filter((w) => w.cat === filter)),
    [filter]
  );

  // INP: الفلتر بيتعمل كـ transition عشان الضغطة ترد فوراً
  const onFilter = useCallback((id) => {
    setActiveId(null);
    startTransition(() => setFilter(id));
  }, []);

  const onPlay = useCallback((id) => setActiveId(id), []); // فيديو واحد بس شغال
  const onEnd = useCallback(() => setActiveId(null), []);

  return (
    <section
      id="works"
      className="scroll-mt-20 bg-[#efe6d8] px-4 py-16 [contain-intrinsic-size:auto_900px] [content-visibility:auto] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center">
          <p className="text-xs font-bold tracking-wide text-[#c8962a]">
            02 // أعمالنا
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1f2430] sm:text-4xl lg:text-5xl">
            أبرز <span className="text-[#d9a62e]">أعمالنا</span>
          </h2>
        </header>

        {/* Filters */}
        <div
          role="group"
          aria-label="تصفية الأعمال"
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
        >
          {FILTERS.map((f) => {
            const selected = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={selected}
                onClick={() => onFilter(f.id)}
                className={`min-h-11 rounded-full px-6 text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9a62e] ${
                  selected
                    ? "bg-[#1f2430] text-white"
                    : "bg-white text-[#1f2430] hover:bg-[#f8f3ea]"
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          aria-busy={isPending}
          className={`mt-10 grid grid-cols-1 gap-5 transition-opacity duration-150 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 ${
            isPending ? "opacity-60" : "opacity-100"
          }`}
        >
          {items.map((item) => (
            <WorkCard
              key={item.id}
              item={item}
              isActive={activeId === item.id}
              onPlay={onPlay}
              onEnd={onEnd}
            />
          ))}
        </div>
      </div>
    </section>
  );
}