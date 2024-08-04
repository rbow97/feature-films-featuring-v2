/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#011502",
          darkGrey: "rgba(45,86,128,.06)",
          lightGrey: "rgba(63, 86, 109, 0.12)",
          grey: "#b7b7b7",
          lightBlack: "#0e1111",
          blue: "#00228E",
          white: "#FCFCFC",
          darkWhite: "#F4E9E1",
          red: "#BA3B46",
        },
      },
      fontFamily: { oswald: ["Oswald", "sans-serif"] },
      fontSize: {
        heading: "28px",
        subheading: "22px",
        text: "18px",
        subtext: "16px",
        button: "16px",
        tag: "14px",
      },
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
