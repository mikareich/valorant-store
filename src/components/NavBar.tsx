import Image from "next/image"

import { Heading3, Text } from "@/components/Typography"

import logoImage from "../../public/images/logo.png"

export default function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image
          alt="Valomate Logo"
          className="h-14 w-14"
          height={100}
          src={logoImage}
          width={100}
        />
        <div className="flex flex-col">
          <Heading3 className="font-valorant leading-none text-red-200">
            Valomate
          </Heading3>
          <Text className="uppercase">
            find your perfect team and step up your gameplay.
          </Text>
        </div>
      </div>
    </div>
  )
}
