import React, { forwardRef } from "react"

import { ReloadIcon } from "@radix-ui/react-icons"
import { cva } from "class-variance-authority"

import cn from "@/utils/cn"

import Outline, { OutlineProps } from "../Outline"

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  loading?: boolean
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  outlineProps?: Partial<OutlineProps>
  mode?: "filled" | "outlined" | "icon"
}

const buttonStyles = cva(
  "flex items-center justify-center gap-1 text-base font-body font-bold transition duration-200 leading-normal outline-none text-gray-100",
  {
    compoundVariants: [
      {
        class:
          "bg-red-400 shadow-transparent text-gray-200 group-hover/outline:bg-red-400",
        disabled: true,
        mode: "filled",
      },
      {
        class: "shadow-transparent text-gray-200 bg-gray-100/10",
        disabled: true,
        mode: "outlined",
      },
      {
        class: "shadow-transparent text-gray-200 bg-gray-100/10",
        disabled: true,
        mode: "icon",
      },
    ],
    variants: {
      disabled: {
        true: "",
      },
      mode: {
        filled:
          "px-7 py-1.5 bg-red-200 shadow-default group-hover/outline:bg-red-300 focus:bg-red-300 ",
        icon: "p-2 bg-transparent group-hover/outline:bg-gray-100/10 focus:bg-gray-100/10",
        outlined:
          "px-7 py-1.5 bg-transparent group-hover/outline:bg-gray-100/10 focus:bg-gray-100/10",
      },
    },
  },
)

type OuterContainerProps = {
  mode: ButtonProps["mode"]
  children: React.ReactNode
  outlineProps?: Partial<OutlineProps>
}

function OuterContainer({ children, mode, outlineProps }: OuterContainerProps) {
  const { ref, ...props } = outlineProps ?? {}
  const className = cn(
    "group/outline cursor-pointer outline-gray-200",
    outlineProps?.className,
  )

  return mode === "icon" ? (
    <div ref={ref} className={className}>
      {children}
    </div>
  ) : (
    <Outline ref={ref} {...props} className={className}>
      {children}
    </Outline>
  )
}

function Button(
  {
    className,
    children,
    disabled,
    loading = false,
    mode = "filled",
    outlineProps,
    prefixIcon,
    suffixIcon,
    ...props
  }: ButtonProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const renderDisabled = disabled || loading

  return (
    <OuterContainer
      mode={mode}
      outlineProps={{
        ...outlineProps,
        closeOnHover: !renderDisabled,
        closeOnFocus: !renderDisabled,
        ref,
      }}
    >
      <button
        {...props}
        className={cn(
          buttonStyles({ disabled: renderDisabled, mode }),
          className,
        )}
        disabled={renderDisabled}
      >
        {loading ? (
          <ReloadIcon className="h-4 w-4 animate-spin text-gray-200" />
        ) : (
          prefixIcon
        )}
        <span className="truncate">{children}</span>
        {suffixIcon}
      </button>
    </OuterContainer>
  )
}

export default forwardRef(Button)
