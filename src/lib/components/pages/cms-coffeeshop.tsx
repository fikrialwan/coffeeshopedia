import AddNewCoffeshop from "../cms/coffeeshop/add"
import { ListCoffeeshop, columnsCoffeeshop } from "../cms/coffeeshop/column"
import CoffeeshopDataTable from "../cms/coffeeshop/data-table"
import { Card, CardContent, CardHeader } from "../ui/card"

export default function CMSCoffeeshop() {
  return (
    <Card>
      <CardHeader className="text-2xl text-primary">List Coffeshop</CardHeader>
      <CardContent>
        <AddNewCoffeshop />
        <CoffeeshopDataTable
          data={ListCoffeeshop}
          columns={columnsCoffeeshop}
        />
      </CardContent>
    </Card>
  )
}
