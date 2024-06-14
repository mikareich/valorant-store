import React, { forwardRef } from "react"

import outlineStyles from "@/styles/outline.module.css"

export type OutlineProps = {
  cornerSize?: number
  cornerGap?: number
  cornerThickness?: number
  closeOnHover?: boolean
  closeOnFocus?: boolean
  hidden?: boolean
  close?: boolean
  className?: string
  // eslint-disable-next-line react/no-unused-prop-types
  ref?: React.ForwardedRef<HTMLDivElement>
  children?: React.ReactNode
}

const hiddenCssVariables = {
  "--cornerGap": "0px",
  "--cornerSize": "0px",
  "--cornerThickness": "0px",
} as React.CSSProperties

function Outline(
  {
    className,
    closeOnFocus,
    closeOnHover,
    close,
    cornerSize = 10,
    cornerGap = 4,
    cornerThickness = 1,
    hidden = false,
    children,
  }: OutlineProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const cssVariables = hidden
    ? hiddenCssVariables
    : ({
        "--cornerGap": `${cornerGap}px`,
        "--cornerSize": `${cornerSize}px`,
        "--cornerThickness": `${cornerThickness}px`,
      } as React.CSSProperties)

  const containerClassName = [
    outlineStyles.container,
    closeOnHover && outlineStyles.closeOnHover,
    closeOnFocus && outlineStyles.closeOnFocus,
    (close || hidden) && outlineStyles.close,
    className,
  ].join(" ")

  return (
    <div ref={ref} className={containerClassName} style={cssVariables}>
      <div className={outlineStyles.outline} />
      <div className={outlineStyles.inner}>{children}</div>
    </div>
  )
}

export default forwardRef(Outline)
