import CoffeeshopDetail from "~/lib/components/pages/coffeeshop-detail"

export default function CoffeeshopDetailPage({
  params: { coffeeshopId },
}: {
  params: { coffeeshopId: string }
}) {
  return <CoffeeshopDetail coffeeshopId={coffeeshopId} />
}
