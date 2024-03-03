import type { Metadata } from "next"
import { Toaster } from "~/lib/components/ui/toaster"

import ReactQueryProvider from "~/lib/providers/react-query-provider"
import { cn } from "~/lib/utils"
import { fontJakarta } from "~/styles/font"
import "~/styles/globals.css"

export const metadata: Metadata = {
  title: "Coffeeshopedia",
  description: "Site for list of coffeeshopedia",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(fontJakarta.variable, "font-jakarta")}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  )
}
