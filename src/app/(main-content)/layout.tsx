import PublicFooter from "~/lib/components/main-content/footer"
import PublicHeader from "~/lib/components/main-content/header"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <PublicHeader />
      {children}
      <PublicFooter />
    </div>
  )
}
