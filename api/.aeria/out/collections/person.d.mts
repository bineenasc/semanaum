import { Collection,SchemaWithId,ExtendCollection,Context } from "aeria"
export declare type personCollection = {description: {$id: "person",properties: {name: {type: "string"}}}}
export declare const person: personCollection & {item: SchemaWithId<personCollection["description"]>}
export declare type Person = SchemaWithId<typeof person.description>
export declare const extendPersonCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof person["description"]>) => unknown
            }
          }>(collection: TCollection) => ExtendCollection<typeof person,TCollection>
