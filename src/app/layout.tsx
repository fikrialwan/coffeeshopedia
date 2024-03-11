import type { Metadata } from "next"
import { Toaster } from "~/lib/components/ui/toaster"

import ReactQueryProvider from "~/lib/providers/react-query-provider"
import { cn } from "~/lib/utils"
import { fontJakarta } from "~/styles/font"
import "~/styles/globals.css"

export const metadata: Metadata = {
  title: "Coffeeshopedia",
  description: "Site for list of coffeeshopedia",
  authors: [
    {
      name: "Fikri Alwan Ramadhan",
      url: "https://fikrialwan.com/",
    },
  ],
  keywords: ["coffeeshop", "wfc", "nextjs", "tailwind", "coffee"],
  openGraph: {
    title: "Coffeeshopedia",
    description: "Site for list of coffeeshopedia",
    type: "website",
  },
  twitter: {
    site: "@coffeeshop-list",
    description: "Site for list of coffeeshopedia",
    creator: "@fkrramadhan19",
  },
  icons: [
    {
      url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fcoffee-logo&psig=AOvVaw2Xc4iyTZm88QLvtzm8qAyN&ust=1710078234110000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKiTvYSo54QDFQAAAAAdAAAAABAE",
    },
  ],
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
