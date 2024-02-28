import Link from "next/link";

export default function CMSSidebar() {
  return <aside className="hidden md:block min-w-60 p-4">
    <h1 className="mb-8 text-primary font-semibold tracking-wide">CMS Coffeeshopedia</h1>
    <ul className="flex flex-col gap-4">
      <li className="flex flex-row group items-center">
        <Link href="/cms" className="flex-1">Dashboard</Link>
        <div className="h-8 w-1 rounded-xl bg-white group-hover:bg-black"/>
      </li>
      <li className="flex flex-row group items-center">
        <Link href="/cms/coffeeshop" className="flex-1">List Coffeeshop</Link>
        <div className="h-8 w-1 rounded-xl bg-white group-hover:bg-black"/>
      </li>
    </ul>
  </aside>
}
