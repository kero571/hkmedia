export default function Logo({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold text-sm font-black text-navy" aria-hidden="true">HK</span>
      <span className="text-lg font-extrabold">HK Media</span>
    </span>
  );
}
