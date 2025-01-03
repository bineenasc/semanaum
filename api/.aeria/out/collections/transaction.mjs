import { extendCollection,defineCollection,get,getAll,insert,remove } from "aeria"
export const transaction = defineCollection({description: {$id: "transaction",properties: {type: {enum: ["credit","debit"]},description: {type: "string"},value: {type: "number"},paid: {type: "boolean"}},icon: "currency-dollar",table: ["type","description","value","paid","created_at"],presets: ["crud"]},functions: {get,getAll,insert,remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}})
export const extendTransactionCollection = (collection) => extendCollection(transaction,collection)
