"use client"

import { useSearchParams } from "next/navigation"

export default function Home() {
  const searchParams = useSearchParams()

  const query = searchParams.get("q")

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>
        {query ? `List of coffeshop search by ${query}` : "List of coffeshop"}
      </h1>
    </main>
  )
}
