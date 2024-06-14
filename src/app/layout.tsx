import "@/styles/globals.css"

import React from "react"

import {
  VALORANT_FONT,
  DIN_NEXT_W05_FONT,
  DIN_NEXT_W1G_FONT,
} from "@/utils/customFonts"

const fontVariables = [
  VALORANT_FONT.variable,
  DIN_NEXT_W05_FONT.variable,
  DIN_NEXT_W1G_FONT.variable,
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={fontVariables.join(" ")}>{children}</body>
    </html>
  )
}
