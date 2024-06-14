"use client"

import { useState } from "react"

import { CheckIcon, CopyIcon } from "@radix-ui/react-icons"

import useParty from "@/hooks/useParty"
import appendStyles from "@/utils/appendStyle"

import Button from "./form/Button"
import Input from "./form/Input"
import { Heading4, TextLarge } from "./Typography"

const RedDot = appendStyles("span", "absolute h-1 w-1 bg-red-200")
const HorizontalLine = appendStyles(
  "div",
  "-z-50 fixed left-0 w-screen h-[1px] bg-gray-300",
)
const VerticalLine = appendStyles(
  "div",
  "-z-50 fixed top-0 w-[1px] h-screen from-transparent via-gray-300 to-transparent bg-gradient-to-b",
)

export default function PartyCode() {
  const [copied, setCopied] = useState(false)
  const copyWait = 2000
  const { partyCode } = useParty()

  const copyCode = async () => {
    if (copied || !partyCode) return

    navigator.clipboard.writeText(partyCode)

    setCopied(true)
    await new Promise((resolve) => {
      setTimeout(resolve, copyWait)
    })
    setCopied(false)
  }

  return (
    <div className="relative w-[clamp(350px,30vw,500px)] p-5 lg:px-14">
      {/* Red Dots in Corner: */}
      <div>
        <RedDot className="-left-0.5 -top-0.5" />
        <RedDot className="-right-0.5 -top-0.5" />
        <RedDot className="-bottom-0.5 -left-0.5" />
        <RedDot className="-bottom-0.5 -right-0.5" />
      </div>

      {/* Lines: */}
      <div>
        <span className="absolute left-0">
          <VerticalLine />
        </span>

        <span className="absolute right-0">
          <VerticalLine />
        </span>

        <span className="absolute top-0">
          <HorizontalLine />
        </span>

        <span className="absolute bottom-0">
          <HorizontalLine />
        </span>
      </div>

      <header className="space-y-1 text-center">
        <Heading4>Party Code</Heading4>
        <TextLarge>
          Copy and paste the Party Code to join the host&apos;s lobby in
          Valorant.
        </TextLarge>
      </header>

      <div className="mx-auto mt-4 w-48">
        <Input
          readOnly
          loading={!partyCode}
          className="text-large text-green-200"
          suffixIcon={
            <Button mode="icon" onClick={copyCode}>
              {copied ? (
                <CheckIcon className="h-4 w-4 text-green-200" />
              ) : (
                <CopyIcon className="h-4 w-4 text-gray-200" />
              )}
            </Button>
          }
          value={partyCode}
        />
      </div>
    </div>
  )
}
