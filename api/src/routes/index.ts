import { createRouter } from 'aeria'
import { searchRouter } from './search.js'
import { transactionRouter } from './transaction.js'
export const router = createRouter()
router.group('/search', searchRouter)
router.group('/transaction', transactionRouter)
