/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: { xs: "420px", sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
    extend: {
      colors: {
        navy: "#2a2f3a",
        navy2: "#353b48",
        gold: "#d1a344",
        goldLight: "#ecc977",
        cream: "#f5eee1",
        sand: "#ece2d0",
        paper: "#fdfaf4",
        ink: "#262b36",
      },
      fontFamily: { sans: ["var(--font-cairo)", "system-ui", "sans-serif"] },
      keyframes: {
        fadeUp: { "0%": { opacity: 0, transform: "translateY(16px)" }, "100%": { opacity: 1, transform: "none" } },
        pop: { "0%": { opacity: 0, transform: "scale(.94)" }, "100%": { opacity: 1, transform: "none" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-6px)" } },
        ring: { "0%": { boxShadow: "0 0 0 0 rgba(209,163,68,.5)" }, "100%": { boxShadow: "0 0 0 14px rgba(209,163,68,0)" } },
        blink: { "0%,100%": { opacity: 1 }, "50%": { opacity: .25 } },
      },
      animation: {
        fadeUp: "fadeUp .7s ease-out both",
        pop: "pop .25s ease-out both",
        marquee: "marquee 30s linear infinite",
        float: "float 4s ease-in-out infinite",
        ring: "ring 2.2s ease-out infinite",
        blink: "blink 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
