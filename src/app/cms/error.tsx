"use client" // Error components must be Client Components

import { useEffect } from "react"
import { Button } from "../../lib/components/ui/button"

export default function Error({
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
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <h2 className="text-center text-lg">Something went wrong!</h2>
      <Button variant="default" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  )
}
