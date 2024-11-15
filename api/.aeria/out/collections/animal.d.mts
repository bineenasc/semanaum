import { Collection,SchemaWithId,ExtendCollection,Context,get,getAll,insert,remove } from "aeria"
export declare type animalCollection = {description: {$id: "animal",properties: {name: {type: "string"},owner: {$ref: "person"},age: {type: "integer"},picture: {$ref: "file"}},icon: "dog",required: ["name","owner","age"],presets: ["crud"]},functions: {get: typeof get,getAll: typeof getAll,insert: typeof insert,remove: typeof remove},exposedFunctions: {get: true,getAll: true,insert: true,remove: true}}
export declare const animal: animalCollection & {item: SchemaWithId<animalCollection["description"]>}
export declare type Animal = SchemaWithId<typeof animal.description>
export declare const extendAnimalCollection: <
          const TCollection extends {
            [P in Exclude<keyof Collection, "functions">] ? : Partial <Collection[P]>
          } &{
            functions?: {
              [F: string]: (payload: any, context: Context<typeof animal["description"]>) => unknown
            }
          }>(collection: TCollection) => ExtendCollection<typeof animal,TCollection>
