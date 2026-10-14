export default function SectionHeading({ eyebrow, title, text, id, dark = false, className = "" }) {
  return (
    <div className={`mb-10 text-center lg:mb-14 ${className}`}>
      <p className="eyebrow" dir="rtl">{eyebrow}</p>
      <h2 id={id} className={`h2 ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`lead ${dark ? "!text-white/65" : ""}`}>{text}</p>}
    </div>
  );
}
