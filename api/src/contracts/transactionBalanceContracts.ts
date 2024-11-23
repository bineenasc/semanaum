import { defineContract, HTTPStatus, endpointErrorSchema, resultSchema } from 'aeria'
export const TransactionBalanceContract = defineContract({
  response: [
    endpointErrorSchema({
      httpStatus: [HTTPStatus.InternalServerError],
      code: ['AGGREGATION_FAILED'],
    }),
    resultSchema({
      type: 'object',
      properties: {
        totalCreditNotPaid: {
          type: 'number',
        },
        totalDebitNotPaid: {
          type: 'number',
        },
        balance: {
          type: 'number',
        },
      },
    }),
  ],
})
