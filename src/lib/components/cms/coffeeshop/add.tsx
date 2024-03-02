import React, { useRef } from "react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog"
import { Button } from "../../ui/button"
import { Input } from "../../ui/input"
import { Textarea } from "../../ui/textarea"
import { useForm } from "react-hook-form"
import { formAddCoffeeshopSchema } from "~/lib/schema/coffeeshop.schema"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormMessage } from "../../ui/form"
import { Label } from "../../ui/label"
import { useAddCoffeeshopMutation } from "~/lib/hooks/coffeeshop.hooks"
import { CoffeeshopTypes } from "~/lib/utils/types"

export default function AddNewCoffeshop() {
  const buttonCloseRef = useRef<HTMLButtonElement>(null)
  const form = useForm<z.infer<typeof formAddCoffeeshopSchema>>({
    resolver: zodResolver(formAddCoffeeshopSchema),
    defaultValues: {
      name: "",
    },
  })
  const { mutateAsync, isIdle } = useAddCoffeeshopMutation()
  const onSubmit = async (data: z.infer<typeof formAddCoffeeshopSchema>) => {
    await mutateAsync(data as CoffeeshopTypes, {
      onSuccess: () => {
        form.reset()
        buttonCloseRef.current?.click()
        console.log("Coffeeshop added successfully")
      },
      onError: (error) => {
        console.error("Error adding coffeeshop:", error)
      },
    })
  }
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
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <FormControl>
                    <Input id="name" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <FormControl>
                    <Textarea id="description" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="facility"
              render={({ field }) => (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="facility">Facility</Label>
                  <FormControl>
                    <Textarea id="facility" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="address">Address</Label>
                  <FormControl>
                    <Textarea id="address" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="urlMaps"
              render={({ field }) => (
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="urlMaps">Url Gmaps</Label>
                  <FormControl>
                    <Input id="urlMaps" {...field} />
                  </FormControl>
                  <FormMessage />
                </div>
              )}
            />
            <Button className="mt-2 w-full" disabled={!isIdle}>
              {isIdle ? "Add" : "Loading..."}
            </Button>
          </form>
        </Form>
        <DialogClose ref={buttonCloseRef} />
      </DialogContent>
    </Dialog>
  )
}
