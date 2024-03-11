import Link from "next/link"
import { Button } from "~/lib/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-1">
      <h2 className="text-center text-lg">Not Found</h2>
      <p className="mb-2">Could not find requested resource</p>
      <Button asChild variant="default">
        <Link href="/">Return Home</Link>
      </Button>
    </div>
  )
}
