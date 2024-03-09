"use client"

import React, { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { createClient } from "~/lib/utils/supabase/client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"
import { useRouter } from "next/navigation"

export default function CMSHeader() {
  const supabase = createClient()

  const router = useRouter()

  const [email, setEmail] = useState("")

  useEffect(() => {
    supabase.auth
      .getUser()
      .then((user) => setEmail(user.data.user?.email || ""))
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.replace("/login")
  }

  return (
    <header className="sticky top-0 flex w-full flex-row items-center justify-end gap-2 bg-primary-foreground px-6 py-4 text-primary">
      hello, <span className="font-semibold">{email}</span>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar>
            <AvatarImage
              src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${email}`}
            />
            <AvatarFallback>
              {email ? email[0].toUpperCase() : "A"}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4 mt-2 flex flex-col gap-2 rounded-lg bg-white px-4 py-2">
          <DropdownMenuItem className="outline-none" asChild>
            <button className="text-left" onClick={handleLogout}>
              Logout
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  )
}
