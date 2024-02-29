"use client"

import type { ColumnDef } from "@tanstack/react-table"
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogAction,
} from "../../ui/alert-dialog"
import { Button } from "../../ui/button"
import Link from "next/link"

type CoffeeshopTypes = {
  id: string
  name: string
  description: string
  facility: string
  address: string
  urlMaps: string
}

export const columnsCoffeeshop: ColumnDef<CoffeeshopTypes>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "facility",
    header: "Facility",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "urlMaps",
    header: "Gmaps url",
  },
  {
    accessorKey: "id",
    header: "Action",
    cell: ({ row }) => {
      const coffeeshop = row.original
      return (
        <div className="flex flex-row gap-2">
          <Button asChild variant="secondary">
            <Link href={"/cms/coffeeshop/edit/" + coffeeshop.id}>Edit</Link>
          </Button>
          <AlertDialog>
            <Button asChild variant="destructive">
              <AlertDialogTrigger>Delete</AlertDialogTrigger>
            </Button>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete{" "}
                  {coffeeshop.name} and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <Button asChild variant="destructive">
                  <AlertDialogAction> Continue</AlertDialogAction>
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )
    },
  },
]

export const ListCoffeeshop: CoffeeshopTypes[] = [
  {
    id: "728ed52f",
    name: "Index Coffee",
    description: "Coffee shop in Blok M",
    facility: "WIFI, Mushola",
    address:
      "Jl. Panglima Polim V No.6, RT.1/RW.6, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
    urlMaps: "https://maps.app.goo.gl/czqV4WCVSEcYBy2X8",
  },
  {
    id: "72c4a9fe",
    name: "Mug & Brew",
    description: "Cozy cafe with artisanal coffee",
    facility: "Outdoor seating, WIFI",
    address:
      "Jl. Kemang Raya No.12, RT.7/RW.2, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730",
    urlMaps: "https://maps.app.goo.gl/xD78e5Er3TNh2JXv6",
  },
  {
    id: "94f7b631",
    name: "Java Junction",
    description: "Quaint coffee house with a garden",
    facility: "WIFI, Parking",
    address:
      "Jl. Cikajang No.19, RT.6/RW.3, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12410",
    urlMaps: "https://maps.app.goo.gl/AbC3Fgj2f1RdeZxQ7",
  },
  {
    id: "a87c4e3b",
    name: "Brewed Bliss",
    description: "Relaxing ambiance with specialty brews",
    facility: "WIFI, Live music",
    address:
      "Jl. Sultan Iskandar Muda No.14, RT.2/RW.5, Arteri Pondok Indah, Kec. Kby. Lama, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12240",
    urlMaps: "https://maps.app.goo.gl/pE9GKm8Rn4Y1udgCA",
  },
  {
    id: "b15d27f9",
    name: "Café Latte Love",
    description: "Charming cafe serving delightful lattes",
    facility: "WIFI, Pet-friendly",
    address:
      "Jl. Dharmawangsa IX No.18, RT.1/RW.4, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
    urlMaps: "https://maps.app.goo.gl/yS6nHpjrdhkmBcyL6",
  },
  {
    id: "d74eb829",
    name: "Espresso Euphoria",
    description: "Artisanal espresso bar with cozy seating",
    facility: "WIFI, Wheelchair accessible",
    address:
      "Jl. Terogong Raya No.21, RT.4/RW.1, Cilandak Tim., Kec. Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12430",
    urlMaps: "https://maps.app.goo.gl/dXmzqN49UmbF3TQs7",
  },
  {
    id: "e31f8a45",
    name: "The Roasted Rabbit",
    description: "Quirky café specializing in roasted coffee",
    facility: "WIFI, Vegan options",
    address:
      "Jl. Barito II No.32, RT.1/RW.2, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12130",
    urlMaps: "https://maps.app.goo.gl/RWtK29s94K9QKDSx7",
  },
  {
    id: "f8023d18",
    name: "Bean & Brew",
    description: "Lively café with a variety of coffee beans",
    facility: "WIFI, Outdoor seating",
    address:
      "Jl. Gunawarman No.34, RT.10/RW.3, Selong, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12110",
    urlMaps: "https://maps.app.goo.gl/Xr1vJGJzrdxqf9jz6",
  },
  {
    id: "gfd9c42a",
    name: "Café Cinnamon",
    description: "Cozy café with a hint of cinnamon in every cup",
    facility: "WIFI, Kid-friendly",
    address:
      "Jl. Panglima Polim IX No.9, RT.8/RW.3, Melawai, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12160",
    urlMaps: "https://maps.app.goo.gl/Qw4mDtKbSNGgXrZZ9",
  },
  {
    id: "h9d8e23c",
    name: "Café Noir",
    description: "Stylish café with a focus on dark-roasted coffee",
    facility: "WIFI, Delivery available",
    address:
      "Jl. Senopati No.36, RT.1/RW.4, Kebayoran Baru, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190",
    urlMaps: "https://maps.app.goo.gl/eTUTJNvR6dUMZCeX8",
  },
  {
    id: "i1a3b4e5",
    name: "Perk & Pour",
    description: "Modern café offering specialty pour-over coffee",
    facility: "WIFI, Outdoor seating",
    address:
      "Jl. Kemang Timur No.40, RT.7/RW.4, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12730",
    urlMaps: "https://maps.app.goo.gl/D93xyXav2qd7YNuf8",
  },
]
