import React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Textarea } from "../../ui/textarea"

export default function AddNewCoffeshop() {
  return (
    <Dialog>
      <Button asChild className="w-24">
        <DialogTrigger>Add</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-4 text-center">
            Add new coffeeshop
          </DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4">
          <Input placeholder="Name" />
          <Textarea placeholder="Description" />
          <Textarea placeholder="Facility" />
          <Textarea placeholder="Address" />
          <Input placeholder="Url Gmaps" />
          <div className="mt-2 flex flex-row items-center justify-end gap-6">
            <Button type="submit" className="w-24">
              Add
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
