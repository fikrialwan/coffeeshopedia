import React from "react"
import { Input } from "../../ui/input"
import { Textarea } from "../../ui/textarea"
import { Button } from "../../ui/button"
import Link from "next/link"

interface EditCoffeeshopFormProps {
  id: string
  name: string
  description: string
  facility: string
  address: string
  urlMaps: string
}

export default function EditCoffeeshopForm({
  id,
  name,
  description,
  facility,
  address,
  urlMaps,
}: EditCoffeeshopFormProps) {
  return (
    <form
      className="flex flex-col gap-2"
      onSubmit={() => console.log("id", id)}
    >
      <Input placeholder="Name" defaultValue={name} />
      <Textarea placeholder="Description" defaultValue={description} />
      <Textarea placeholder="Facility" defaultValue={facility} />
      <Textarea placeholder="Address" defaultValue={address} />
      <Input placeholder="Url Gmaps" defaultValue={urlMaps} />
      <div className="mt-2 flex flex-row items-center justify-end gap-6">
        <Button variant="ghost" asChild className="w-24">
          <Link href="/cms/coffeeshop">Cancel</Link>
        </Button>
        <Button type="submit" className="w-24">
          Edit
        </Button>
      </div>
    </form>
  )
}
