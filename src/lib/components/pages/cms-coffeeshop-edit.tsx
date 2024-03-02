import EditCoffeeshopForm from "../cms/coffeeshop/edit"
import { Card, CardContent, CardHeader } from "../ui/card"

interface EditCoffeeshopFormProps {
  id: string
  name: string
  description: string
  facility: string
  address: string
  urlMaps: string
}

export default function CMSCoffeeshopEdit({
  id,
  name,
  description,
  facility,
  address,
  urlMaps,
}: EditCoffeeshopFormProps) {
  return (
    <Card>
      <CardHeader className="text-2xl text-primary">Edit Coffeshop</CardHeader>
      <CardContent>
        <EditCoffeeshopForm
          id={id}
          name={name}
          description={description}
          address={address}
          facility={facility}
          urlMaps={urlMaps}
        />
      </CardContent>
    </Card>
  )
}
