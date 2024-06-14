import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      green: {
        100: "#4EFFD1",
        200: "#22FFC5", // default green
        300: "#1BCC9E",
        400: "#149976",
      },
      yellow: {
        100: "#D9CA7A",
        200: "#CCB84E", // default yellow
        300: "#BFA622",
        400: "#99851B",
      },
      red: {
        100: "#FF6C79",
        200: "#FF4758", // primary red
        300: "#CC3946",
        400: "#992B35",
      },
      gray: {
        100: "#ECE8E1", // headeing text color
        200: "#888D93", // default text color
        300: "#243A50", // bg accent
        400: "#0E1822", // bg
      },
      transparent: "transparent",
    },
    fontFamily: {
      heading: "var(--font-heading)",
      body: "var(--font-body)",
      valorant: "var(--font-valorant)",
    },
    fontSize: {
      h1: "48px",
      h2: "40px",
      h3: "33px",
      h4: "28px",
      h5: "23px",
      large: "20px",
      base: "16px",
      small: "14px",
      inherit: "inherit",
    },
    boxShadow: {
      default: "0px 0px 5px 0px #FF4758",
    },
    extend: {
      screens: {
        "3xl": "1920px",
      },
    },
  },
}

export default config
