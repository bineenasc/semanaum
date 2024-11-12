import { createRouter } from 'aeria'
import { searchRouter } from './search.js'
export const router = createRouter()
router.group('/search', searchRouter)

