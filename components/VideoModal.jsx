"use client";
import { useEffect, useRef } from "react";
import Icon from "./ui/Icon";

// الفيديو فقط: بدون عنوان أو تصنيف أو تفاصيل. عنصر <video> لا يُنشأ إلا عند الفتح.
export default function VideoModal({ src, title, poster, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const prev = document.activeElement;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-full animate-pop"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="إغلاق الفيديو"
          className="absolute -top-12 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white hover:bg-gold hover:text-navy"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="metadata"
          className="block h-auto w-auto max-h-[85svh] max-w-[min(92vw,960px)] rounded-2xl bg-black object-contain"
        />
      </div>
    </div>
  );
}
