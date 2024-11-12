import { extendCollection,defineCollection,get,getAll,insert,remove } from "aeria"
export const animal = defineCollection({description: {$id: "animal",properties: {name: {type: "string"},owner: {$ref: "person"},age: {type: "integer"},picture: {$ref: "file"}},icon: "dog",required: ["name","owner","age"],presets: ["crud"]},functions: {get,getAll,insert,remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}})
export const extendAnimalCollection = (collection) => extendCollection(animal,collection)
