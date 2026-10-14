"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "../ui/Icon";
import SectionHeading from "../ui/SectionHeading";
import { FILTERS, WORKS } from "@/data/content";

const INITIAL_COUNT = 4;

export default function Works() {
  const [filter, setFilter] = useState("all");
  const [playingId, setPlayingId] = useState(null);
  const [failedId, setFailedId] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const list = filter === "all" ? WORKS : WORKS.filter((w) => w.cat === filter);
  const visibleWorks = showAll ? list : list.slice(0, INITIAL_COUNT);

  const handleFilterChange = (id) => {
    setFilter(id);
    setShowAll(false);
    setPlayingId(null);
    setFailedId(null);
  };

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
    setPlayingId(null);
  };

  const play = (id) => {
    setFailedId(null);
    setPlayingId(id);
  };

  return (
    <section id="works" aria-labelledby="works-title" className="defer bg-sand/70">
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

        <div
          aria-label="تصفية الأعمال"
          className="no-scrollbar -mx-5 mb-8 flex gap-2.5 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
        >
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
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

        <ul className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {visibleWorks.map((w) => (
            <li key={w.id} className="min-w-0">
              <div
                className={`relative overflow-hidden rounded-3xl bg-black shadow-md ${
                  w.cat === "wedding" ? "aspect-video" : "aspect-[9/16]"
                }`}
              >
                {playingId === w.id ? (
                  failedId === w.id ? (
                    <p className="absolute inset-0 grid place-items-center px-4 text-center text-sm text-white">
                      تعذر تشغيل الفيديو، حاول مرة أخرى لاحقاً
                    </p>
                  ) : (
                    <video
                      src={w.src}
                      poster={w.cover}
                      controls
                      autoPlay
                      playsInline
                      preload="metadata"
                      onError={() => setFailedId(w.id)}
                      className="absolute inset-0 h-full w-full object-contain"
                    />
                  )
                ) : (
                  <button
                    type="button"
                    onClick={() => play(w.id)}
                    aria-label={`تشغيل الفيديو: ${w.title}`}
                    className="group absolute inset-0 block w-full text-start"
                  >
                    <Image
                      src={w.cover}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gold text-navy animate-ring sm:h-16 sm:w-16">
                      <Icon name="play" className="h-6 w-6" />
                    </span>
                    <span className="absolute inset-x-0 bottom-0 p-4 sm:p-5" dir="rtl">
                      <span className="block text-xs font-bold text-gold">{w.label}</span>
                      <span className="mt-1 block truncate text-base font-extrabold text-white sm:text-lg">
                        {w.title}
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>

        {list.length > INITIAL_COUNT && (
          <div className="mt-10 text-center">
            <button
              type="button"
              onClick={toggleShowAll}
              aria-expanded={showAll}
              className="inline-flex items-center gap-2 rounded-full border border-ink/40 px-8 py-3 text-sm font-bold transition hover:border-gold hover:text-gold"
            >
              {showAll ? "عرض أقل" : "عرض المزيد"}
              <span className={`transition-transform ${showAll ? "rotate-90" : "-rotate-90"}`}>
                <Icon name="arrowLeft" className="h-4 w-4" />
              </span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}