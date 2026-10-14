import { Cairo } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const cairo = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "600", "700", "800", "900"], display: "swap", variable: "--font-cairo" });

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#2a2f3a" };

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s | HK Media" },
  description: SITE.description,
  keywords: ["تصوير تجاري", "تصوير عقارات", "تصوير منتجات", "تصوير أفراح", "مونتاج فيديو", "ريلز", "إنتاج إعلانات", "HK Media", "إتش كيه ميديا"],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "ar_AR", url: SITE.url, siteName: SITE.name, title: SITE.title, description: SITE.description, images: [{ url: "/profile.jpg", width: 960, height: 1280, alt: "HK Media" }] },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description, images: ["/profile.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body>{children}</body>
    </html>
  );
}
