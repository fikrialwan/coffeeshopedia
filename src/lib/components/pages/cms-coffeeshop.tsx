"use client"

import { useQuery } from "@tanstack/react-query"
import AddNewCoffeshop from "../cms/coffeeshop/add"
import { columnsCoffeeshop } from "../cms/coffeeshop/column"
import CoffeeshopDataTable from "../cms/coffeeshop/data-table"
import { Card, CardContent, CardHeader } from "../ui/card"
import { getCoffeeshopList } from "~/lib/utils/api-request"

export default function CMSCoffeeshop() {
  const {
    data: listCoffeeshop,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["coffeeshop-list"],
    queryFn: () => getCoffeeshopList(),
    staleTime: 1 * 60 * 1000,
  })

  return (
    <Card>
      <CardHeader className="text-2xl text-primary">List Coffeshop</CardHeader>
      <CardContent>
        <AddNewCoffeshop />
        {isLoading && <div>Loading books...</div>}
        {listCoffeeshop && (
          <CoffeeshopDataTable
            data={listCoffeeshop}
            columns={columnsCoffeeshop}
          />
        )}
        {isError && <div>Error fetching coffeeshop</div>}
      </CardContent>
    </Card>
  )
}
