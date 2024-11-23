import { useApp, defineOptions, type MenuSchema } from 'aeria-ui'
import aeriaEn from '@aeria-ui/i18n-en'
import { en } from './i18n/index.js'
import { routes } from './routes.js'
import * as stores from './stores'
import Main from './main.vue'
import NoResults from './components/no-results.vue'

const menuSchema: MenuSchema = [
  '/dashboard',
    '/dashboard/animal',
    '/dashboard/transaction',
    '/dashboard/person',
    '/dashboard/checkin',
    '/dashboard/geolocation',
    '/dashboard/user',
]

const options = defineOptions({
  component: Main,
  routes,
  setup: ({ context, router }) => {
    Object.values(stores).map((registerStore) => registerStore(router)(context))
  },
  i18n: {
    current: 'en',
    locales: {
      en: [
        aeriaEn,
        en,
      ],
    },
  },
  menuSchema,
})

useApp(options).then(({ app, mount }) => {
  app.provide('noResultsComponent', NoResults)
  mount()
})

