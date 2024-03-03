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
import { CoffeeshopTypes } from "~/lib/utils/types"
import { useDeleteCoffeeshopMutation } from "~/lib/hooks/coffeeshop.hooks"
import { useRouter } from "next/navigation"
import { useToast } from "../../ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"

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

      const { toast } = useToast()
      const { mutateAsync, isIdle } = useDeleteCoffeeshopMutation()

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
                  <AlertDialogAction
                    onClick={async () => {
                      await mutateAsync(coffeeshop.id, {
                        onSuccess: () => {
                          toast({
                            variant: "success",
                            title: "Success",
                            description: "Coffeeshop deleted successfully",
                          })
                        },
                        onError: (error) => {
                          toast({
                            variant: "destructive",
                            title: "Uh oh! Something went wrong.",
                            description: error.message,
                            action: (
                              <ToastAction altText="Try again">
                                Try again
                              </ToastAction>
                            ),
                          })
                        },
                      })
                    }}
                    disabled={!isIdle}
                  >
                    {" "}
                    Continue
                  </AlertDialogAction>
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      )
    },
  },
]
