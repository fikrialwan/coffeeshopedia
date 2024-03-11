"use client"

import { useEffect } from "react"
import { Button } from "~/lib/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html>
      <body className="flex h-screen w-full flex-col items-center justify-center gap-2 bg-primary-foreground">
        <h2 className="text-center text-lg">Something went wrong!</h2>
        <Button variant="default" onClick={() => reset()}>
          Try again
        </Button>
      </body>
    </html>
  )
}
