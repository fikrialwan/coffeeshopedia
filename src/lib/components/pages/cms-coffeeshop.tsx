import { ListCoffeeshop, columnsCoffeeshop } from "../cms/coffeeshop/column";
import CoffeeshopDataTable from "../cms/coffeeshop/data-table";

export default function CMSCoffeeshop() {
  return (
    <CoffeeshopDataTable data={ListCoffeeshop} columns={columnsCoffeeshop} />
  )
}
