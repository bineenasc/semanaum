import { extendCollection,defineCollection,get,getAll,insert,remove } from "aeria"
export const checkin = defineCollection({description: {$id: "checkin",properties: {animal: {$ref: "animal"},weight: {type: "string"},temperature: {type: "string"},type: {enum: ["routine","emergency"]},reason: {type: "string"}},icon: "check",required: ["animal","weight","type","reason"],presets: ["crud"]},functions: {get,getAll,insert,remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}})
export const extendCheckinCollection = (collection) => extendCollection(checkin,collection)
