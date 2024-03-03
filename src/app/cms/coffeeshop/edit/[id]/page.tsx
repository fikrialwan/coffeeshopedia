"use client"

import React from "react"
import CMSCoffeeshopEdit from "~/lib/components/pages/cms-coffeeshop-edit"

export default function CoffeeshopEditPage({
  params: { id },
}: {
  params: { id: string }
}) {
  return <CMSCoffeeshopEdit id={id} />
}
