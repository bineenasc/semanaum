import { createRouter, functionSchemas, Result, resultSchema } from 'aeria'
export const searchRouter = createRouter()
searchRouter.GET('/searchAnimal', async(context)=>{
  const query = context.request.query

  const { error: personError, result: person } = await context.collections.person.functions.get({
    filters: {
      document: query.document,
    },
  })
  if (personError){
    return Result.error(personError)
  }

  const { error: animalError, result: animal } = await context.collections.animal.functions.get({
    filters: {
      owner: person._id,
    },
  })
  if (animalError){
    return Result.error(animalError)
  }

  const { error: checkinError, result: checkin } = await context.collections.checkin.functions.getAll({
    filters: {
      animal: animal._id,
    },
  })
  if (checkinError){
    return Result.error(checkinError)
  }
  return Result.result(checkin)

}, {
  query: {
    type: 'object',
    properties: {
      document: {
        type: 'string',
      },
    },
  },
  response: [
    functionSchemas.getError(),
    functionSchemas.getAllError(),
    resultSchema({
      type: 'array',
      items: {
        $ref: 'checkin',
      },
    }),
  ],
})

