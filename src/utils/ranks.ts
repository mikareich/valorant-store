import { RANKS, Rank, RankNumber } from "@/types/player"

import ascendent1Image from "../../public/images/ranks/ASCENDANT 1.png"
import ascendent2Image from "../../public/images/ranks/ASCENDANT 2.png"
import ascendent3Image from "../../public/images/ranks/ASCENDANT 3.png"
import bronze1Image from "../../public/images/ranks/BRONZE 1.png"
import bronze2Image from "../../public/images/ranks/BRONZE 2.png"
import bronze3Image from "../../public/images/ranks/BRONZE 3.png"
import diamond1Image from "../../public/images/ranks/DIAMOND 1.png"
import diamond2Image from "../../public/images/ranks/DIAMOND 2.png"
import diamond3Image from "../../public/images/ranks/DIAMOND 3.png"
import gold1Image from "../../public/images/ranks/GOLD 1.png"
import gold2Image from "../../public/images/ranks/GOLD 2.png"
import gold3Image from "../../public/images/ranks/GOLD 3.png"
import immortal1Image from "../../public/images/ranks/IMMORTAL 1.png"
import immortal2Image from "../../public/images/ranks/IMMORTAL 2.png"
import immortal3Image from "../../public/images/ranks/IMMORTAL 3.png"
import iron1Image from "../../public/images/ranks/IRON 1.png"
import iron2Image from "../../public/images/ranks/IRON 2.png"
import iron3Image from "../../public/images/ranks/IRON 3.png"
import platinum1Image from "../../public/images/ranks/PLATINUM 1.png"
import platinum2Image from "../../public/images/ranks/PLATINUM 2.png"
import platinum3Image from "../../public/images/ranks/PLATINUM 3.png"
import radiantImage from "../../public/images/ranks/RADIANT.png"
import silver1Image from "../../public/images/ranks/SILVER 1.png"
import silver2Image from "../../public/images/ranks/SILVER 2.png"
import silver3Image from "../../public/images/ranks/SILVER 3.png"
import unrankedImage from "../../public/images/ranks/UNRANKED.png"

export const RANK_IMAGES = {
  Unranked: unrankedImage,
  "Iron 1": iron1Image,
  "Iron 2": iron2Image,
  "Iron 3": iron3Image,
  "Bronze 1": bronze1Image,
  "Bronze 2": bronze2Image,
  "Bronze 3": bronze3Image,
  "Silver 1": silver1Image,
  "Silver 2": silver2Image,
  "Silver 3": silver3Image,
  "Gold 1": gold1Image,
  "Gold 2": gold2Image,
  "Gold 3": gold3Image,
  "Platinum 1": platinum1Image,
  "Platinum 2": platinum2Image,
  "Platinum 3": platinum3Image,
  "Diamond 1": diamond1Image,
  "Diamond 2": diamond2Image,
  "Diamond 3": diamond3Image,
  "Ascendant 1": ascendent1Image,
  "Ascendant 2": ascendent2Image,
  "Ascendant 3": ascendent3Image,
  "Immortal 1": immortal1Image,
  "Immortal 2": immortal2Image,
  "Immortal 3": immortal3Image,
  Radiant: radiantImage,
} as const

/** Returns the rank number of the given rank.
 *
 * @example
 * ```ts
 * getRankNumber("RADIANT") // 27
 * ```
 */
export const getRankNumberByName = (rank: Rank) =>
  Number(
    Object.keys(RANKS).find(
      (key) => RANKS[Number(key) as keyof typeof RANKS] === rank,
    ) || -1,
  ) as RankNumber

/** Returns the rank of the given rank number.
 *
 * @example
 * ```ts
 * getRank(27) // "RADIANT"
 * ```
 */
export const getRankNameByNumber = <RNumber extends RankNumber>(
  rankNumber: RNumber,
) => RANKS[rankNumber as keyof typeof RANKS] as (typeof RANKS)[RNumber]
