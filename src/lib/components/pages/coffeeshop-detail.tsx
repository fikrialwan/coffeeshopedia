interface CoffeeshopDetailProps {
  coffeeshopId: string
}

export default function CoffeeshopDetail({
  coffeeshopId,
}: CoffeeshopDetailProps) {
  return <div>{coffeeshopId} Detail Page</div>
}
