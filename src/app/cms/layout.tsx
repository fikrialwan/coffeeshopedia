import CMSSidebar from "~/lib/components/cms/sidebar"

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row">
      <CMSSidebar />
      <div className="flex-1 max-h-screen h-screen overflow-auto p-4 bg-primary-foreground">
        {children}
      </div>
    </div>
  )
}
