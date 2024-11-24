import { Collection,SchemaWithId,ExtendCollection,Context,get,getAll,insert,remove } from "aeria"
export declare type transactionCollection = {description: {$id: "transaction",properties: {type: {enum: ["credit","debit"]},description: {type: "string"},value: {type: "number"},paid: {type: "boolean"}},icon: "currency-dollar",table: ["type","description","value","paid","created_at"],presets: ["crud"]},functions: {get: typeof get,getAll: typeof getAll,insert: typeof insert,remove: typeof remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}}
export declare const transaction: transactionCollection & {item: SchemaWithId<transactionCollection["description"]>}
export declare type Transaction = SchemaWithId<typeof transaction.description>
export declare const extendTransactionCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof transaction["description"]>) => unknown
            }
          }>(collection: TCollection) => ExtendCollection<typeof transaction,TCollection>
