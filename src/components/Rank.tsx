import Image from "next/image"

import { RankWithoutUnusedNumber } from "@/types/player"
import { RANK_IMAGES, getRankNameByNumber } from "@/utils/ranks"

type RankProps = {
  rank: RankWithoutUnusedNumber
} & Omit<
  Parameters<typeof Image>[0],
  "alt" | "src" | "width" | "height" | "blurDataURL" | "placeholder"
>

export default function Rank({ rank, ...props }: RankProps) {
  return (
    <Image
      {...props}
      alt={`${rank} Rank Icon`}
      src={RANK_IMAGES[getRankNameByNumber(rank)]}
    />
  )
}
