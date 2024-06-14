import React from "react"

import * as RAlertDialog from "@radix-ui/react-alert-dialog"

import Button from "./form/Button"
import Outline from "./Outline"
import { Heading4, TextLarge } from "./Typography"

type AlertDialogProps = {
  children: React.ReactNode
  title: string
  description: React.ReactNode
  cancelText: string
  actionText: string
  onAction: () => void
}

export default function AlertDialog({
  children,
  title,
  description,
  cancelText,
  actionText,
  onAction,
}: AlertDialogProps) {
  return (
    <RAlertDialog.Root>
      <RAlertDialog.Trigger asChild>{children}</RAlertDialog.Trigger>
      <RAlertDialog.Portal>
        <RAlertDialog.Overlay className="fixed inset-0 bg-gray-300 bg-opacity-50" />
        <RAlertDialog.Content className="fixed inset-0 flex w-full items-center justify-center">
          <Outline close className="border-in !w-1/2 bg-gray-300 !p-8 !pb-5">
            <RAlertDialog.Title>
              <Heading4 className="font-valorant text-gray-100">
                {title}
              </Heading4>
            </RAlertDialog.Title>
            <RAlertDialog.Description>
              <TextLarge className="text-gray-200 ">{description}</TextLarge>
            </RAlertDialog.Description>
            <div className="mt-4 flex justify-end gap-6">
              <RAlertDialog.Cancel asChild>
                <Button mode="outlined" outlineProps={{ closeOnHover: true }}>
                  {cancelText}
                </Button>
              </RAlertDialog.Cancel>
              <RAlertDialog.Action asChild onClick={onAction}>
                <Button outlineProps={{ closeOnHover: true }}>
                  {actionText}
                </Button>
              </RAlertDialog.Action>
            </div>
          </Outline>
        </RAlertDialog.Content>
      </RAlertDialog.Portal>
    </RAlertDialog.Root>
  )
}
