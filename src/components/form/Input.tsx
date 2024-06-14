import React, { forwardRef } from "react"

import { cva, cx } from "class-variance-authority"

import Skeleton from "../Skeleton"

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
  loading?: boolean
}

const containerStyle = cva(
  "px-7 py-2.5 flex items-center gap-2 border border-gray-300 hover:border-gray-200 focus-within:border-gray-200 transition flex-1",
)

const inputStyle = cva(
  "bg-transparent outline-none flex-1 w-full text-base text-gray-100 font-body  placeholder:text-gray-200 placeholder:font-light",
)

function Input(
  { prefixIcon, suffixIcon, className, loading = false, ...props }: InputProps,
  ref: React.Ref<HTMLDivElement>,
) {
  return (
    <div className={containerStyle()} ref={ref}>
      {prefixIcon}

      {loading ? (
        <Skeleton className="h-6 flex-1" />
      ) : (
        <input {...props} className={cx(inputStyle(), className)} />
      )}

      {suffixIcon}
    </div>
  )
}

export default forwardRef(Input)
