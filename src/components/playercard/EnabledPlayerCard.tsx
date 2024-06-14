/* eslint-disable react/destructuring-assignment */

import { Cross1Icon } from "@radix-ui/react-icons"
import Image from "next/image"

import { PartyMember, ROLES, Role } from "@/types/party"
import cn from "@/utils/cn"

import Button from "../form/Button"
import Outline from "../Outline"
import Rank from "../Rank"
import Skeleton from "../Skeleton"
import { Heading5 } from "../Typography"

const BANNER_DIMENSION = [450, 128] as const // [width, height]

type PartyMemberProps =
  | {
      type: "loading"
    }
  | ({
      roles: Role[]
      onRoleChange: (_role: Role) => void
      name: string
      tag: string
    } & (
      | ({
          type: "leader" | "player"
        } & PartyMember)
      | {
          type: "empty"
          onRemove: () => void
        }
    ))
export default function EnabledPlayercard(props: PartyMemberProps) {
  const { type } = props
  const isLoading = type === "loading"
  const isEmpty = type === "empty"
  const isMember = !isLoading && !isEmpty

  const inRoles = (role: Role) => !isLoading && props.roles.includes(role)

  return (
    <div className="flex h-full w-full items-center gap-2">
      <div
        className={cn(
          "h-full w-1 bg-gray-300",
          type === "player" && "bg-green-200",
          type === "leader" && "bg-yellow-300",
        )}
      />

      <div className="relative flex h-full w-full flex-col gap-1 overflow-hidden bg-gray-400 px-4 py-3">
        <div className="absolute left-0 top-0 h-full w-full">
          {isMember ? (
            <>
              <Image
                alt="Player Card"
                className="absolute left-0 top-0 h-full w-full object-cover"
                height={BANNER_DIMENSION[1]}
                src={props.bannerSrc}
                style={{ filter: "blur(2px)" }}
                width={BANNER_DIMENSION[0]}
              />
              <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-[black]" />
            </>
          ) : (
            <Outline className="!h-full !w-full" />
          )}
        </div>

        <div className="z-10 mt-auto grid grid-cols-[1fr,auto] items-end gap-2">
          <span className="flex items-baseline overflow-hidden">
            {isLoading ? (
              <Skeleton className="mb-2.5 h-[23px] w-full" />
            ) : (
              <Heading5 className="truncate font-body 2xl:text-h4">
                {props.name}#{props.tag}
              </Heading5>
            )}

            {type === "leader" && (
              <Image
                alt="Crown"
                className="h-4 w-4"
                height={32}
                src="/images/crown.png"
                width={32}
              />
            )}
          </span>

          {!isEmpty && (
            <Rank
              className="ml-auto aspect-square max-w-12 xl:max-w-16"
              rank={isMember ? props.performance.rank : 0}
            />
          )}

          <div className="row-start-2 flex gap-2">
            {ROLES.map((role) => (
              <button
                type="button"
                key={role}
                className={`min-h-6 min-w-6 transition duration-200 ${inRoles(role) ? "opacity-100 hover:!opacity-100" : "opacity-20"} hover:opacity-60`}
                onClick={() => !isLoading && props.onRoleChange(role)}
              >
                <Image
                  alt={role}
                  height={24}
                  src={`/images/roles/${role}.png`}
                  width={24}
                />
              </button>
            ))}
          </div>

          {isEmpty && (
            <Button
              outlineProps={{ className: "row-start-2 w-min justify-self-end" }}
              mode="icon"
              onClick={props.onRemove}
              className="p-[2px]"
            >
              <Cross1Icon className="h-5 w-5" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
