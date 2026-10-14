"use client";

import { useCallback, useState } from "react";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import VideoModal from "../VideoModal";
import { FILTERS, WORKS } from "@/data/content";
import Image from "next/image";
export default function Works() {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const close = useCallback(() => setActive(null), []);

  const list = filter === "all" ? WORKS : WORKS.filter((w) => w.cat === filter);

  const visibleWorks = showAll ? list : list.slice(0, 4);

  const handleFilterChange = (id) => {
    setFilter(id);
    setShowAll(false);
  };

  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="defer bg-sand/70"
    >
      <div className="section container-x">
        <SectionHeading
          id="works-title"
          eyebrow="02 // أعمالنا"
          title={
            <>
              أبرز <span className="text-gold">أعمالنا</span>
            </>
          }
        />

        {/* Filters */}
        <div
          role="tablist"
          aria-label="تصفية الأعمال"
          className="no-scrollbar -mx-5 mb-8 flex gap-2.5 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              onClick={() => handleFilterChange(f.id)}
              className={`shrink-0 rounded-full px-6 py-2.5 text-sm font-bold transition ${
                filter === f.id
                  ? "bg-navy text-white"
                  : "bg-paper text-ink/75 hover:text-gold"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Videos */}
        <ul className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visibleWorks.map((w) => (
            <li key={w.id} className="min-w-0">
              <button
                type="button"
                onClick={() => setActive(w)}
                aria-label={`تشغيل الفيديو: ${w.title}`}
                className={`group relative block w-full overflow-hidden rounded-3xl bg-gradient-to-br ${
                  w.bg
                } ${
                  w.cat === "wedding" ? "aspect-video" : "aspect-[9/16]"
                } text-start shadow-md transition hover:-translate-y-1 hover:shadow-xl`}
              >
                <Image
                  src={w.cover}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"
                />
                <i className="corner left-4 top-4 border-l-2 border-t-2" />
                <i className="corner right-4 top-4 border-r-2 border-t-2" />

                {w.cat === "reels" && (
                  <span className="absolute right-3 top-3 flex items-center gap-2 rounded-full bg-black/45 px-3 py-1 text-xs font-extrabold text-goldLight sm:right-4 sm:top-4">
                    <i className="block h-2 w-2 rounded-full bg-red-500" />
                    <span dir="ltr">9:16</span>
                    <span>ريلز</span>
                  </span>
                )}

                {w.cat === "wedding" && (
                  <span className="absolute right-3 top-3 rounded-full bg-black/45 px-3 py-1 text-xs font-extrabold text-goldLight sm:right-4 sm:top-4">
                    <span dir="ltr">16:9</span> الأفراح
                  </span>
                )}

                {/* Play button */}
                <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy animate-ring transition group-hover:scale-110 sm:h-16 sm:w-16">
                  <Icon name="play" className="h-6 w-6" />
                </span>

                {/* Video title */}
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/80 via-black/25 to-transparent p-4 pt-12 sm:p-5 sm:pt-14">
                  <span className="ms-auto min-w-0 text-start">
                    <span className="block text-xs font-bold text-gold">
                      {w.label}
                    </span>

                    <span
                      className="mt-1 block truncate text-base font-extrabold text-white sm:text-lg"
                      dir="rtl"
                    >
                      {w.title}
                    </span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        {/* Show more: only when this category has more than 6 videos */}
        {list.length > 4 && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full border border-ink/40 px-8 py-3 text-sm font-bold transition hover:border-gold hover:text-gold"
            >
              {showAll ? "عرض أقل" : "عرض المزيد"}

              <span
                className={`transition-transform ${
                  showAll ? "rotate-90" : "-rotate-90"
                }`}
              >
                <Icon name="arrowLeft" className="h-4 w-4" />
              </span>
            </button>
          </div>
        )}
      </div>

      {active && (
        <VideoModal
          src={active.src}
          title={active.title}
          poster={active.cover}
          onClose={close}
        />
      )}
    </section>
  );
}
