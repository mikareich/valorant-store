"use client"

import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons"
import type { SelectProps as DefaultSelectProps } from "@radix-ui/react-select"
import {
  Root,
  Trigger,
  Portal,
  Content,
  Item,
  ItemText,
  Icon as SelectIcon,
  Value as SelectValue,
  Viewport,
  ScrollUpButton,
  ScrollDownButton,
} from "@radix-ui/react-select"
import { cva } from "class-variance-authority"

import { OutlineProps } from "../Outline"

import Button from "./Button"

export type Option = {
  value: string
  label: string
  disabled?: boolean
}

const itemStyle = cva(
  "cursor-pointer px-7 py-1.5 text-center font-body text-base outline-none truncate data-[state='checked']:bg-gray-200/50 data-[highlighted]:bg-gray-200/50 select-none w-full text-gray-100 overflow-hidden max-w-full",
  {
    variants: {
      disabled: {
        true: "text-gray-200 cursor-not-allowed hover:bg-gray-300",
      },
      highlighted: {
        true: "bg-gray-200/50",
      },
    },
  },
)

function OptionItem({
  value,
  label,
  disabled,
  isSelected,
}: Option & { isSelected: boolean }) {
  return (
    <Item
      data-state={isSelected ? "checked" : "unchecked"}
      className={itemStyle({ disabled })}
      disabled={disabled}
      value={value}
    >
      <ItemText>{label}</ItemText>
    </Item>
  )
}

export const formatValue = (value: string[], options: Option[]) =>
  value
    .map((v) => options.find((o) => o.value === v)?.label)
    .filter(Boolean)
    .join(", ")

export const toggleItem = <
  Value extends string,
  SelectedValues extends Value[],
>(
  value: Value,
  selectedItems: SelectedValues,
) =>
  selectedItems.includes(value)
    ? selectedItems.filter((item): item is Value => item !== value)
    : [...selectedItems, value]

type SelectProps = Omit<DefaultSelectProps, "value"> & {
  options: Option[]
  outlineProps?: Partial<OutlineProps>
  value?: string[]
}

export default function Select({
  options,
  children,
  disabled,
  outlineProps,
  value: selectedItems = [],
  ...props
}: SelectProps) {
  const isSelected = (value: string) => selectedItems.includes(value)

  return (
    <Root value={selectedItems.join()} {...props}>
      <Trigger asChild>
        <Button
          disabled={disabled}
          mode="outlined"
          className="w-full"
          outlineProps={outlineProps}
          suffixIcon={
            <SelectIcon>
              <ChevronDownIcon />
            </SelectIcon>
          }
        >
          <SelectValue placeholder={children}>{children}</SelectValue>
        </Button>
      </Trigger>

      <Portal>
        <Content
          position="popper"
          sideOffset={10}
          className="max-h-64 w-[--radix-select-trigger-width] overflow-hidden border border-gray-300 bg-gray-400"
        >
          <ScrollUpButton className="flex w-full justify-center py-1.5">
            <ChevronUpIcon />
          </ScrollUpButton>

          <Viewport>
            {options.map(({ value, ...optionProps }) => (
              <OptionItem
                key={value}
                value={value}
                isSelected={isSelected(value)}
                {...optionProps}
              />
            ))}
          </Viewport>

          <ScrollDownButton className="flex w-full justify-center py-1.5">
            <ChevronDownIcon />
          </ScrollDownButton>
        </Content>
      </Portal>
    </Root>
  )
}
