import { BASE_URL } from "./config"
import { CoffeeshopTypes } from "./types"

const coffeeshopAPIUrl = BASE_URL + "/coffeeshop"

export async function getCoffeeshopList() {
  const res = await fetch(coffeeshopAPIUrl)
  const coffeeshop = (await res.json()) as CoffeeshopTypes[]
  return coffeeshop
}

export async function getCoffeeshopById(id: string) {
  const res = await fetch(`${coffeeshopAPIUrl}?search={"id":"${id}"}`)
  const coffeeshop = (await res.json()) as CoffeeshopTypes[]
  return coffeeshop.length > 0
    ? coffeeshop[0]
    : { id, name: "", description: "", facility: "", address: "", urlMaps: "" }
}

export async function addCoffeeshop(newCoffeeshop: CoffeeshopTypes) {
  const coffeeshopToAdd = { ...newCoffeeshop, id: new Date().valueOf() }

  const response = await fetch(coffeeshopAPIUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([coffeeshopToAdd]),
  })

  if (!response.ok) {
    throw new Error("Failed to add the coffeeshop")
  }

  return await response.json()
}

export async function updateCoffeeshop(payload: CoffeeshopTypes) {
  const { id, ...newCoffeeshop } = payload
  const coffeeshopToUpdate = { ...newCoffeeshop }

  const body = {
    condition: {
      id,
    },
    set: coffeeshopToUpdate,
  }

  const response = await fetch(coffeeshopAPIUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error("Failed to add the coffeeshop")
  }

  return await response.json()
}
