import { Suspense } from "react"
import Home from "~/lib/components/pages/home"

export default function HomePage() {
  return (
    <Suspense>
      <Home />
    </Suspense>
  )
}
