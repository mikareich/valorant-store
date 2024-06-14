"use client"

import React, { forwardRef, useMemo } from "react"

import * as RCheckbox from "@radix-ui/react-checkbox"

import { Text } from "@/components/Typography"
import cn from "@/utils/cn"

type CheckboxProps = Omit<Parameters<(typeof RCheckbox)["Root"]>[0], "id">

const containerStyle = "flex items-center gap-2"

function Checkbox(
  { children, className, checked, ...props }: CheckboxProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const id = useMemo(() => Math.random().toString(36).slice(2), [])

  return (
    <div className={cn(containerStyle, className)} ref={ref}>
      <RCheckbox.Root
        {...props}
        checked={checked}
        className="group relative mx-[3px] size-5 rotate-45 border-2 border-gray-100 p-0.5 outline-none transition-all focus-within:border-green-400"
        id={id}
      >
        <div className="size-full transition-all group-hover:bg-gray-200">
          <RCheckbox.Indicator>
            <div className="size-full bg-green-200 transition-all group-hover:bg-green-300" />
          </RCheckbox.Indicator>
        </div>
      </RCheckbox.Root>

      <label htmlFor={id}>
        <Text className="text-gray-100">{children}</Text>
      </label>
    </div>
  )
}

export default forwardRef(Checkbox)
