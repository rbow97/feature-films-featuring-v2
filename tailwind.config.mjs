/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform:" translateY(0)",
            opacity: 1,
          }
        },
        slideOut: {
          "0%": {
            transform: "translateY(0%)",
            opacity: 1,
          },
          "100%": {
            transform:" translateY(100%)",
            opacity: 0,
          }
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        slideIn: "slideIn 500ms cubic-bezier(.76,0,.24,1) forwards",
        slideOut: "slideOut 500ms cubic-bezier(.76,0,.24,1) forwards",
        rotate: "rotate 3s infinite",
      },
      height: {
        xs: "24px",
        sm: "32px",
        md: "48px",
        lg: "56px",
        xl: "100px",
      },
      width: {
        xs: "24px",
        sm: "32px",
        md: "48px",
        lg: "56px",
        xl: "100px",
      },
      gap: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        "2xl": "48px",
        "3xl": "60px",
      },
      padding: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        "2xl": "96px",
      },
      margin: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        "2xl": "48px",
        "3xl": "60px",
      },
      colors: {
        primary: {
          black: "#011502",
          darkGrey: "#7F7F7F",
          lightGrey: "#F7F8FB",
          grey: "#EEF1F7",
          lightBlack: "#0e1111",
          blue: "#00228E",
          white: "#FCFCFC",
          darkWhite: "#ECE7DB",
          red: "#BA3B46",
        },
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
      fontSize: {
        xs: "10px",
        sm: "14px",
        md: "16px",
        lg: "36px",
        xl: "60px",
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
        secondary: "cubic-bezier(.76,0,.24,1)",
      },
    },
  },
  plugins: [],
};
