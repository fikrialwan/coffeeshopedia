import { BASE_URL } from "./config"
import { CoffeeshopTypes } from "./types"

const coffeeshopAPIUrl = BASE_URL + "/coffeeshop"

export async function getCoffeeshopList() {
  const res = await fetch(coffeeshopAPIUrl)
  const coffeeshop = (await res.json()) as CoffeeshopTypes[]
  return coffeeshop
}

export async function addCoffeeshop(newCoffeeshop: CoffeeshopTypes) {
  const bookToAdd = { ...newCoffeeshop, id: new Date().valueOf() } // Include the new ID in the bookToAdd object

  const response = await fetch(coffeeshopAPIUrl, {
    method: "POST", // Adjust based on Stein's requirements for adding new entries
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([bookToAdd]), // Adjust based on Stein's API expectations
  })

  if (!response.ok) {
    throw new Error("Failed to add the book")
  }

  return await response.json()
}
