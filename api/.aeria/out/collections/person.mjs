import { extendCollection,defineCollection } from "aeria"
export const person = defineCollection({description: {$id: "person",properties: {name: {type: "string"}}}})
export const extendPersonCollection = (collection) => extendCollection(person,collection)
