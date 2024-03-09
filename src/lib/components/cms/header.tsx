"use client"

import React, { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { createClient } from "~/lib/utils/supabase/client"

export default function CMSHeader() {
  const supabase = createClient()
  const [email, setEmail] = useState("")

  useEffect(() => {
    supabase.auth
      .getUser()
      .then((user) => setEmail(user.data.user?.email || ""))
  }, [])

  return (
    <header className="sticky top-0 flex w-full flex-row items-center justify-end gap-2 bg-primary-foreground px-6 py-4 text-primary">
      hello, <span className="font-semibold">{email}</span>
      <Avatar>
        <AvatarImage
          src={`https://api.dicebear.com/7.x/thumbs/svg?seed=${email}`}
        />
        <AvatarFallback>{email ? email[0].toUpperCase() : "A"}</AvatarFallback>
      </Avatar>
    </header>
  )
}
