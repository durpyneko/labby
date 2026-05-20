// Lib
import Link from "next/link"

// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

// Icons
import { LogOutIcon, SettingsIcon, Skull, User2Icon } from "lucide-react"

export default function Comp() {
  return (
    <div className="mx-2 mt-2 flex flex-row items-center justify-between rounded-2xl bg-card p-2 shadow-md">
      <div className="flex flex-row items-center gap-4">
        <Link href="/">
          <div className="flex flex-row items-center gap-3 pl-2">
            <span className="text-2xl">⌬</span>
            <span className="font-bold">Labby</span>
          </div>
        </Link>
        <div className="font-bold text-ring italic">
          <Link href="/search">
            <span>⁘ Search</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Badge variant="destructive">
          <Skull data-icon="inline-start" />
          Admin
        </Badge>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Avatar>
                <AvatarImage src="/user-default.jpg" alt="User" />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <span className="flex flex-row justify-center text-ring">
              John Doe
            </span>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <User2Icon />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <SettingsIcon />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive">
              <LogOutIcon />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}
