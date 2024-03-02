import React from "react"
import * as z from "zod"
import { Input } from "../../ui/input"
import { Textarea } from "../../ui/textarea"
import { Button } from "../../ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"
import { formUpdateCoffeeshopSchema } from "~/lib/schema/coffeeshop.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUpdateCoffeeshopMutation } from "~/lib/hooks/coffeeshop.hooks"
import { CoffeeshopTypes } from "~/lib/utils/types"
import { useRouter } from "next/navigation"
import { Form, FormControl, FormField, FormMessage } from "../../ui/form"
import { Label } from "../../ui/label"

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
  const router = useRouter()
  const form = useForm<z.infer<typeof formUpdateCoffeeshopSchema>>({
    resolver: zodResolver(formUpdateCoffeeshopSchema),
    defaultValues: {
      name,
      description,
      facility,
      address,
      urlMaps,
    },
  })
  const { mutateAsync, isIdle } = useUpdateCoffeeshopMutation()
  const onSubmit = async (data: z.infer<typeof formUpdateCoffeeshopSchema>) => {
    await mutateAsync({ ...data, id } as CoffeeshopTypes, {
      onSuccess: () => {
        form.reset()
        router.replace("/cms/coffeeshop")
      },
      onError: (error) => {
        console.error("Error adding coffeeshop:", error)
      },
    })
  }

  return (
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

        <div className="mt-2 flex flex-row items-center justify-end gap-6">
          <Button variant="ghost" asChild className="w-24">
            <Link href="/cms/coffeeshop">Cancel</Link>
          </Button>
          <Button type="submit" className="w-24" disabled={!isIdle}>
            {isIdle ? "Edit" : "Loading..."}
          </Button>
        </div>
      </form>
    </Form>
  )
}
