import Icon from "../ui/Icon";
import Logo from "../ui/Logo";
import { NAV } from "@/data/content";

export default function Footer() {
  const links = [...NAV.slice(0, 3), { href: "#contact", label: "احجز تصوير" }];
  return (
    <footer className="bg-navy text-white">
      <div className="container-x py-10 lg:py-12">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-start">
          <div>
            <Logo />
            <p className="mt-2 text-sm text-white/55">محتوى مرئي يلفت الأنظار.</p>
          </div>
          <a href="#top" className="inline-flex items-center gap-2.5 text-sm font-bold text-gold">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"><Icon name="up" className="h-4 w-4" /></span>
            العودة للأعلى
          </a>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:justify-between">
          <p>© 2026 HK Media. جميع الحقوق محفوظة.</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {links.map((l) => (<li key={l.href}><a href={l.href} className="transition hover:text-gold">{l.label}</a></li>))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
