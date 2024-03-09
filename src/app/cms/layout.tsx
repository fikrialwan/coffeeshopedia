import CMSHeader from "~/lib/components/cms/header"
import CMSSidebar from "~/lib/components/cms/sidebar"

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <CMSSidebar />
      <div className="h-screen max-h-screen flex-1 ">
        <CMSHeader />
        <div className="h-full overflow-auto bg-primary-foreground p-4">
          {children}
        </div>
      </div>
    </div>
  )
}
