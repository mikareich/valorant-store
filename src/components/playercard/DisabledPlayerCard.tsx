import { PlusIcon } from "@radix-ui/react-icons"

import Outline from "../Outline"
import { TextLarge } from "../Typography"

type DisabledPlayercardProps = {
  onAddPlayer: () => void
}

export default function DisabledPlayerccard({
  onAddPlayer,
}: DisabledPlayercardProps) {
  return (
    <div className="h-full w-full border border-gray-300 bg-gray-400">
      <Outline close className="!h-full !w-full" cornerGap={0}>
        <div className="flex h-full items-center justify-center">
          <button
            onClick={onAddPlayer}
            className="flex cursor-pointer items-center gap-1"
          >
            <PlusIcon className="mr-2 h-6 w-6" />{" "}
            <TextLarge>Add player</TextLarge>
          </button>
        </div>
      </Outline>
    </div>
  )
}
