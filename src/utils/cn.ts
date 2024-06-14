import { type ClassValue, clsx } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const appendTextPrefix = (value: string) => `text-${value}`

const colors = ["red", "yellow", "green", "gray"].flatMap((color) => [
  `${color}-100`,
  `${color}-200`,
  `${color}-300`,
  `${color}-400`,
])

const bgColors = colors.flatMap((color) => `bg-${color}`)

const textColors = colors.map(appendTextPrefix)

const fontSize = ["h1", "h2", "h3", "h4", "h5", "large", "base", "small"].map(
  appendTextPrefix,
)

const twMerge = extendTailwindMerge({
  override: {
    classGroups: {
      "bg-color": bgColors,
      "font-size": fontSize,
      "text-color": textColors,
    },
  },
})

export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
