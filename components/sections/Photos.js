"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { PHOTOS } from "@/data/content";

export default function Photos() {
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!PHOTOS.length) return null;

  const goTo = (index) => {
    const nextIndex = Math.max(0, Math.min(index, PHOTOS.length - 1));

    setActiveIndex(nextIndex);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.getBoundingClientRect().left + track.clientWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - center);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((current) =>
      current === closestIndex ? current : closestIndex,
    );
  };

  return (
    <section
      id="photos"
      dir="rtl"
      className="section overflow-hidden bg-navy text-white"
    >
      <div className="container-x">
        {/* Section Heading */}
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow !text-goldLight">معرض الصور</p>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              كل لقطة بتحكي حكاية.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
              مجموعة من اللقطات التي توثق شغفنا بالتصوير واهتمامنا بأدق
              التفاصيل.
            </p>
          </div>

          {/* Carousel Controls */}
          <div
            className="flex items-center justify-between gap-4 sm:justify-end"
            aria-label="التحكم في معرض الصور"
          >
            <span className="font-mono text-sm text-goldLight">
              {String(activeIndex + 1).padStart(2, "0")}
              {" / "}
              {String(PHOTOS.length).padStart(2, "0")}
            </span>

            <div className="flex gap-2" dir="ltr">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                disabled={activeIndex === 0}
                aria-label="الصورة السابقة"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:bg-gold hover:text-navy disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="m9 18 6-6-6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                disabled={activeIndex === PHOTOS.length - 1}
                aria-label="الصورة التالية"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-gold hover:bg-gold hover:text-navy disabled:cursor-not-allowed disabled:opacity-30"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path
                    d="m15 18-6-6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Images Carousel */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          dir="rtl"
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4"
        >
          {PHOTOS.map((photo, index) => (
            <div
              key={photo.id}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              className="group relative w-[82%] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  quality={75}
                  sizes="(max-width: 639px) 82vw, (max-width: 1023px) 48vw, 32vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-70" />

                <span className="absolute bottom-4 left-4 font-mono text-sm font-bold text-white/90">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicator */}
        <div
          className="mt-5 h-1 overflow-hidden rounded-full bg-white/10"
          role="progressbar"
          aria-label="تقدم معرض الصور"
          aria-valuemin={1}
          aria-valuemax={PHOTOS.length}
          aria-valuenow={activeIndex + 1}
        >
          <div
            className="h-full rounded-full bg-gold transition-all duration-300"
            style={{
              width: `${((activeIndex + 1) / PHOTOS.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
