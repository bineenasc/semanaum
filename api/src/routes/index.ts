import { createRouter } from 'aeria'

export const router = createRouter()

router.GET('/buscar', (context) => {

    return{
        name: 'pabline'
    }
})

