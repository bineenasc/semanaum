import { createRouter, HTTPStatus, Result } from 'aeria'
import { TransactionBalanceContract } from '../contracts/transactionBalanceContracts.js'
export const transactionRouter = createRouter()

transactionRouter.GET('/balance', async(context) => {
  const balance = await context.collections.transaction.model.aggregate([
    {
      $group: {
        _id: null,
        totalDebitNotPaid: {
          $sum: {
            $cond: [
              {
                $and: [
                  {
                    $eq: [
                      '$type',
                      'debit',
                    ],
                  },
                  {
                    $eq: [
                      '$paid',
                      false,
                    ],
                  },
                ],
              },
              '$value',
              0,
            ],
          },
        },
        totalCreditNotPaid: {
          $sum: {
            $cond: [
              {
                $and: [
                  {
                    $eq: [
                      '$type',
                      'credit',
                    ],
                  },
                  {
                    $eq: [
                      '$paid',
                      false,
                    ],
                  },
                ],
              },
              '$value',
              0,
            ],
          },
        },
        totalDebitPaid: {
          $sum: {
            $cond: [
              {
                $and: [
                  {
                    $eq: [
                      '$type',
                      'debit',
                    ],
                  },
                  {
                    $eq: [
                      '$paid',
                      true,
                    ],
                  },
                ],
              },
              '$value',
              0,
            ],
          },
        },
        totalCreditPaid: {
          $sum: {
            $cond: [
              {
                $and: [
                  {
                    $eq: [
                      '$type',
                      'credit',
                    ],
                  },
                  {
                    $eq: [
                      '$paid',
                      true,
                    ],
                  },
                ],
              },
              '$value',
              0,
            ],
          },
        },
      },
    },

    {
      $project: {
        _id: 0,
        balance: {
          $subtract: [
            '$totalCreditPaid',
            '$totalDebitPaid',
          ],
        },
        totalCreditNotPaid: 1,
        totalDebitNotPaid: 1,
      },
    },
  ]).next()

  if(!balance){
    return context.error(HTTPStatus.InternalServerError, {
      code: 'AGGREGATION_FAILED',
    })
  }

  return Result.result(balance)
}, TransactionBalanceContract)
