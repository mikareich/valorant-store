import React, { ComponentType, JSX, forwardRef } from "react"

import cn from "./cn"

type StyleArg<T> = string | ((_props: T) => string)

/**
  Appends class names to a component based on the props passed to it.
  @param Component The component to append styles to.
  @param styles The styles to append to the component.

  @example
  ```tsx
  const Button = appendStyles('button', cva('bg-blue-500 text-white'))
  ```
*/
export default function appendStyles<
  Type extends ComponentType<any> | keyof JSX.IntrinsicElements,
  Props extends React.ComponentPropsWithRef<Type>,
>(Component: Type, styles: StyleArg<Props>) {
  return forwardRef((props: Props, ref) => {
    const { className, ...otherProps } = props
    const resolvedStyles = typeof styles === "function" ? styles(props) : styles
    const newClassName = cn(resolvedStyles, className || "")
    return React.createElement(Component, {
      className: newClassName,
      ref,
      ...otherProps,
    })
  })
}
