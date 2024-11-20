import { registerStore, createCollectionStore } from "aeria-ui";
import { Router } from "vue-router";

export const animal = (router: Router) => registerStore((manager) => createCollectionStore({
  $id: 'animal',
  actions: () => ({
    profile: (filters: { _id: string }) => {
      router.push({
        name: '/dashboard/pet-[id]',
        params: {
          id: filters._id,
        }
      })
    }
  })
}, manager))
