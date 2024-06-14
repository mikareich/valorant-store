import localFont from "next/font/local"

export const VALORANT_FONT = localFont({
  src: "../../public/fonts/Valorant Font.ttf",
  variable: "--font-valorant",
})

export const DIN_NEXT_W05_FONT = localFont({
  src: "../../public/fonts/URW DIN.ttf",
  variable: "--font-heading",
})

export const DIN_NEXT_W1G_FONT = localFont({
  src: [
    {
      path: "../../public/fonts/DINNextW1G-Black.otf",
      style: "normal",
      weight: "800",
    },
    {
      path: "../../public/fonts/DINNextW1G-BlackItalic.otf",
      style: "italic",
      weight: "800",
    },
    {
      path: "../../public/fonts/DINNextW1G-Bold.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../public/fonts/DINNextW1G-BoldItalic.otf",
      style: "italic",
      weight: "700",
    },
    {
      path: "../../public/fonts/DINNextW1G-Heavy.otf",
      style: "normal",
      weight: "900",
    },
    {
      path: "../../public/fonts/DINNextW1G-HeavyItalic.otf",
      style: "italic",
      weight: "900",
    },
    {
      path: "../../public/fonts/DINNextW1G-Italic.otf",
      style: "italic",
      weight: "400",
    },
    {
      path: "../../public/fonts/DINNextW1G-Light.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "../../public/fonts/DINNextW1G-LightItalic.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "../../public/fonts/DINNextW1G-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/DINNextW1G-MediumItalic.otf",
      style: "italic",
      weight: "500",
    },
    {
      path: "../../public/fonts/DINNextW1G-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/DINNextW1G-UltraLight.otf",
      style: "normal",
      weight: "200",
    },
    {
      path: "../../public/fonts/DINNextW1G-UltraLightIt.otf",
      style: "italic",
      weight: "200",
    },
  ],
  variable: "--font-body",
})
