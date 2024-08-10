/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      height: {
        small: "32px",
        medium: "100px",
      },
      width: {
        small: "32px",
        medium: "100px",
      },
      gap: {
        xs: "8px",
        sm: "16px",
        md: "32px",
        lg: "40px",
      },
      padding: {
        xs: "8px",
        sm: "16px",
        md: "32px",
        lg: "40px",
        xl: "48px",
      },
      margin: {
        xs: "8px",
        sm: "16px",
        md: "32px",
        lg: "40px",
        xl: "48px",
      },
      colors: {
        primary: {
          black: "#011502",
          darkGrey: "rgba(45,86,128,.06)",
          lightGrey: "rgba(63, 86, 109, 0.12)",
          grey: "#6B7D7D",
          lightBlack: "#0e1111",
          blue: "#00228E",
          white: "#FCFCFC",
          // darkWhite: "#FBF7F4",
          darkWhite: "#ECE7DB",
          red: "#BA3B46",
        },
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        heading: "28px",
        subheading: "22px",
        text: "18px",
        subtext: "16px",
        button: "16px",
        tag: "14px",
        buttonSmall: "10px",
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
