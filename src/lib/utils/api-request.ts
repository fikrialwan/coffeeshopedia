import { BASE_URL } from "./config"
import { CoffeeshopTypes } from "./types"

const coffeeshopAPIUrl = BASE_URL + "/coffeeshop"

export async function getCoffeeshopList() {
  const res = await fetch(coffeeshopAPIUrl)
  const coffeeshop = (await res.json()) as CoffeeshopTypes[]
  return coffeeshop
}
