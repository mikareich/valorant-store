import NextLink from "next/link"

import appendStyles from "@/utils/appendStyle"

const baseHeadingStyle = "font-heading text-gray-100 font-bold"

export const Heading1 = appendStyles("h1", `${baseHeadingStyle} text-h1`)

export const Heading2 = appendStyles("h2", `${baseHeadingStyle} text-h2`)

export const Heading3 = appendStyles("h3", `${baseHeadingStyle} text-h3`)

export const Heading4 = appendStyles("h4", `${baseHeadingStyle} text-h4`)

export const Heading5 = appendStyles("h5", `${baseHeadingStyle} text-h5`)

const baseBodyStyle = "font-body text-gray-200"

export const TextLarge = appendStyles("p", `${baseBodyStyle} text-large`)

export const Text = appendStyles("p", `${baseBodyStyle} text-base`)

export const TextSmall = appendStyles("p", `${baseBodyStyle} text-small`)

export const Link = appendStyles(
  NextLink,
  "font-body font-inherit text-red-200 hover:text-red-300 focus:text-red-300 transition duration-150 font-medium",
)
