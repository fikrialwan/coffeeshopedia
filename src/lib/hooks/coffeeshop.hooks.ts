import { useMutation, useQueryClient } from "@tanstack/react-query"
import {
  addCoffeeshop,
  deleteCoffeeshop,
  updateCoffeeshop,
} from "../utils/api-request"

export function useAddCoffeeshopMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: addCoffeeshop,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coffeeshop-list"] })
    },
    onError: (error) => {
      console.error("Error adding coffeeshop:", error)
    },
  })
}

export function useUpdateCoffeeshopMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateCoffeeshop,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coffeeshop-list"] })
      queryClient.invalidateQueries({ queryKey: ["coffeeshop"] })
    },
    onError: (error) => {
      console.error("Error updating coffeeshop:", error)
    },
  })
}

export function useDeleteCoffeeshopMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteCoffeeshop,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["coffeeshop-list"] })
    },
    onError: (error) => {
      console.error("Error deleting coffeeshop:", error)
    },
  })
}
