import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addCoffeeshop } from "../utils/api-request"

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
