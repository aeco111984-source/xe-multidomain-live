module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./ui/**/*.{ts,tsx,css}", "./config/**/*.{json}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "var(--brand-500)", 600: "var(--brand-600)" },
        neutralv: { 0: "var(--neutral-0)", 50: "var(--neutral-50)", 100: "var(--neutral-100)", 800: "var(--neutral-800)" }
      },
      boxShadow: { md: "var(--shadow-md)", lg: "var(--shadow-lg)" },
      borderRadius: { lg: "var(--radius-lg)", xl: "var(--radius-xl)" }
    }
  },
  plugins: []
};