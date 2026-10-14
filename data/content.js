export const NAV = [
  { href: "#top", label: "الرئيسية" },
  { href: "#services", label: "خدماتنا" },
  { href: "#works", label: "أعمالنا" },
  { href: "#photos", label: "معرض الصور" },
  { href: "#process", label: "طريقة العمل" },
  { href: "#about", label: "من نحن" },
];

export const TICKER = [
  "تصوير تجاري",
  "عقارات",
  "منتجات",
  "أفراح ومناسبات",
  "ريلز وسوشيال ميديا",
  "إعلانات",
];

export const STATS = [
  { value: "120", label: "مشروع تم تسليمه" },
  { value: "85", label: "عميل سعيد" },
  { value: "6", label: "سنوات خبرة" },
];

export const SERVICES = [
  {
    icon: "building",
    title: "تصوير المحلات التجارية",
    text: "تصوير احترافي يُبرز متجرك بأفضل صورة ويمنح المساحات الداخلية والخارجية جاذبية استثنائية.",
  },
  {
    icon: "home",
    title: "تصوير العقارات",
    text: "مرئيات نظيفة ومضيئة تساعد العقار على البيع أسرع مع تأطير معماري مدروس وإبراز كامل للتفاصيل.",
  },
  {
    icon: "box",
    title: "تصوير المنتجات",
    text: "تفاصيل بصرية تبرز جودة المنتج وتدعم المبيعات، مع إبراز الخامات ولمسات الإضاءة المتقنة.",
  },
  {
    icon: "heart",
    title: "جلسات الأفراح والمناسبات",
    text: "تغطية طبيعية ومؤثرة لأهم لحظات حياتك مع ألوان سينمائية دافئة توثق المشاعر بصدق.",
  },
  {
    icon: "phone",
    title: "ريلز ومحتوى السوشيال ميديا",
    text: "محتوى قصير يوقف المشاهد عن التمرير، من الفكرة حتى المونتاج النهائي ومؤثرات صوتية جذابة.",
  },
  {
    icon: "video",
    title: "إنتاج الفيديوهات الإعلانية والترويجية",
    text: "فيديوهات ترويجية مبنية حول هوية علامتك التجارية لتحقيق أهدافك التسويقية وزيادة المبيعات.",
  },
];

export const FILTERS = [
  { id: "all", label: "الكل" },
  { id: "reels", label: "ريلز" },
  { id: "wedding", label: "الأفراح" },
];

const reels = Array.from({ length: 7 }, (_, index) => ({
  id: `reel-${index + 1}`,
  cat: "reels",
  src: `/videos/reels/${index + 1}.mp4`,
  title: `ريلز ${index + 1}`,
  label: "ريلز",
  reels: true,
  bg: "from-slate-900 via-slate-800 to-black",
  cover: `/covers/reels/${index + 1}.jpg`,
}));

const weddings = Array.from({ length: 2 }, (_, index) => ({
  id: `wedding-${index + 1}`,
  cat: "wedding",
  src: `/videos/wedding/${index + 1}.mp4`,
  title: `فرح ${index + 1}`,
  label: "الأفراح",
  reels: false,
  bg: "from-stone-900 via-neutral-800 to-black",
  cover: `/covers/wedding/${index + 1}.jpg`,
}));

export const WORKS = [...reels, ...weddings];

export const PHOTOS = Array.from({ length: 34 }, (_, index) => ({
  id: `photo-${index + 1}`,
  src: `/photos/${index + 1}.webp`,
  alt: `صورة من أعمال HK Media رقم ${index + 1}`,
}));

export const STEPS = [
  {
    n: "01",
    title: "الفكرة والتصور",
    text: "تطوير القصة، المراجع البصرية، لوحات الإلهام، وجداول التصوير المتوافقة مع أهدافك.",
  },
  {
    n: "02",
    title: "التصوير",
    text: "استخدام أدوات وتقنيات تصوير حديثة، مع إضاءة مدروسة واهتمام بالتفاصيل لالتقاط لقطات جذابة بأعلى جودة ممكنة.",
  },
  {
    n: "03",
    title: "المونتاج",
    text: "قص وتنسيق إيقاعي ديناميكي، تصميم صوتي مخصص، جرافيكس، وتلوين سينمائي دافئ.",
  },
  {
    n: "04",
    title: "الإخراج النهائي والتسليم",
    text: "مراجعة العميل، التعديلات الدقيقة، والتسليم بدقة عالية بصيغ أفقية وعمودية ملائمة للنشر.",
  },
];
export const WHY = [
  {
    icon: "sparkle",
    title: "صورة عالية الجودة",
    text: "شاشات وعدسات سينمائية وإضاءة ذهبية مصممة خصيصاً مع ملمس بصري فخم يميز محتواك عن تصوير الهواتف العادي.",
  },
  {
    icon: "target",
    title: "محتوى يعكس هوية علامتك",
    text: "لا قوالب جاهزة، كل لقطة تحكي لغتك الحقيقية وتخاطب جمهورك المستهدف بأسلوب يعزز الثقة والولاء.",
  },
  {
    icon: "sun",
    title: "أسعار عادلة ومرنة",
    text: "باقات تسعير واضحة ومرنة تناسب المشاريع الصغيرة والعلامات التجارية الرائدة بدون أي تكاليف خفية.",
  },
];

export const BULLETS = [
  "دورة إنتاجية متكاملة",
  "مونتاج وتلوين داخلي",
  "باقات مخصصة للهوية",
];

export const SOCIALS = [
  { icon: "youtube", label: "YouTube", href: "https://youtube.com/@hegazikhairy2028?si=42eRFnUP42mE14-S" },
  { icon: "facebook", label: "Facebook", href: "https://www.facebook.com/share/1B8vAhUwfk/" },
  { icon: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@hegazik.moustafa?_r=1&_t=ZS-9AT5VKytohR" },
];
