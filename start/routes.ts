/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const AuthController = () => import('#controllers/auth_controller')
const DashboardController = () => import('#controllers/dashboard_controller')
const ColoringBooksController = () => import('#controllers/coloring_books_controller')
const IniciosController = () => import('#controllers/inicios_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})
router.get('/inicio', [DashboardController, 'index']).use(
  middleware.auth({
    guards: ['api'],
  })
)

router.get('dashboard', [IniciosController, 'index'])

router.post('/login', [AuthController, 'login'])

router
  .group(() => {
    router.get('/', [ColoringBooksController, 'index'])
    router.post('/', [ColoringBooksController, 'store'])
    router.get('/:id', [ColoringBooksController, 'show'])
    router.put('/:id', [ColoringBooksController, 'update'])
    router.patch('/:id', [ColoringBooksController, 'update'])
    router.delete('/:id', [ColoringBooksController, 'destroy'])
  })
  .prefix('/coloring-books')
  .use(middleware.auth({ guards: ['api'] }))
