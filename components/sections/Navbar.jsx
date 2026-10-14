"use client";
import { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import Logo from "../ui/Logo";
import { NAV } from "@/data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/85 text-white backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-4 lg:h-20">
        <a href="#top" aria-label="HK Media — الرئيسية">
          <Logo />
        </a>
        <nav
          aria-label="القائمة الرئيسية"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-bold text-white/75 transition hover:text-gold"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="btn hidden !px-6 !py-2.5 lg:inline-flex"
          >
            احجز تصوير
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="قائمة الموبايل"
        hidden={!open}
        className="border-t border-white/10 bg-navy lg:hidden"
      >
        <ul className="container-x grid gap-1 py-3">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-bold text-white/85 hover:bg-white/5"
              >
                {n.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn w-full"
            >
              احجز تصوير
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
