import CMSSidebar from "~/lib/components/cms/sidebar";

export default function CMSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CMSSidebar />
      {children}
    </div>
  );
}
