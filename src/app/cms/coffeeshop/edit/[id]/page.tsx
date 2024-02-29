"use client"

import React from "react"
import { ListCoffeeshop } from "~/lib/components/cms/coffeeshop/column"
import CMSCoffeeshopEdit from "~/lib/components/pages/cms-coffeeshop-edit"

export default function CoffeeshopEditPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const defaultValueCoffeeshop = ListCoffeeshop.find(
    (coffeeshop) => coffeeshop?.id === id
  )

  return (
    <CMSCoffeeshopEdit
      id={defaultValueCoffeeshop?.id || id}
      address={defaultValueCoffeeshop?.address || ""}
      description={defaultValueCoffeeshop?.description || ""}
      facility={defaultValueCoffeeshop?.facility || ""}
      name={defaultValueCoffeeshop?.name || ""}
      urlMaps={defaultValueCoffeeshop?.description || ""}
    />
  )
}
