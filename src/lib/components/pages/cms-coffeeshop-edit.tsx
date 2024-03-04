"use client"

import { useQuery } from "@tanstack/react-query"
import EditCoffeeshopForm from "../cms/coffeeshop/edit"
import { Card, CardContent, CardHeader } from "../ui/card"
import { getCoffeeshopById } from "~/lib/utils/api-request"

interface EditCoffeeshopFormProps {
  id: string
}

export default function CMSCoffeeshopEdit({ id }: EditCoffeeshopFormProps) {
  const {
    data: coffeeshop,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coffeeshop"],
    queryFn: () => getCoffeeshopById(id),
    staleTime: 1 * 60 * 1000,
  })

  return (
    <Card>
      <CardHeader className="text-2xl text-primary">Edit Coffeshop</CardHeader>
      <CardContent>
        {isLoading && <div>Loading coffeeshop...</div>}
        {coffeeshop && (
          <EditCoffeeshopForm
            id={id}
            name={coffeeshop?.name || ""}
            description={coffeeshop?.description || ""}
            address={coffeeshop?.address || ""}
            facility={coffeeshop?.facility || ""}
            urlMaps={coffeeshop?.urlMaps || ""}
          />
        )}
        {isError && <div>Error fetching coffeeshop</div>}
      </CardContent>
    </Card>
  )
}
