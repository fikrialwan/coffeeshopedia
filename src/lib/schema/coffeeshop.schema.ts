import * as z from "zod"

export const formAddCoffeeshopSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, "Name is required"),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, "Description is required"),
  facility: z
    .string({
      required_error: "Facility is required",
    })
    .min(1, "Facility is required"),
  address: z
    .string({
      required_error: "Address is required",
    })
    .min(1, "Address is required"),
  urlMaps: z
    .string({
      required_error: "Url Gmaps is required",
    })
    .min(1, "Url Gmaps is required"),
})

export const formUpdateCoffeeshopSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, "Name is required"),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, "Description is required"),
  facility: z
    .string({
      required_error: "Facility is required",
    })
    .min(1, "Facility is required"),
  address: z
    .string({
      required_error: "Address is required",
    })
    .min(1, "Address is required"),
  urlMaps: z
    .string({
      required_error: "Url Gmaps is required",
    })
    .min(1, "Url Gmaps is required"),
})
