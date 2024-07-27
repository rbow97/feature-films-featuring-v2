/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "rgba(3,15,29,.92)",
          grey: "rgba(45,86,128,.06)",
          darkGrey: "#b7b7b7",
        },
      },
      fontFamily: { limelight: ["Limelight", "sans-serif"] },
      transitionDuration: {
        primary: "750ms",
        secondary: "1000ms",
      },
      transitionTimingFunction: {
        primary: "cubic-bezier(.16,1,.3,1)",
      },
    },
  },
  plugins: [],
};
