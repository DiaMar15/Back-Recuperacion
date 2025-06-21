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
const PageRangesController = () => import('#controllers/page_ranges_controller')
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

    // ⚠️ Específicas primero
    router.patch('/:id/restore', [ColoringBooksController, 'restore'])
    router.delete('/coloring-books/:id/force', 'ColoringBooksController.forceDelete') // ← Esta también funciona

    // ✅ Genéricas después
    router.get('/:id', [ColoringBooksController, 'show'])
    router.put('/:id', [ColoringBooksController, 'update'])
    router.patch('/:id', [ColoringBooksController, 'update'])
    router.delete('/:id', [ColoringBooksController, 'destroy'])
  })
  .prefix('/coloring-books')
  .middleware(middleware.auth({ guards: ['api'] }))




router
  .group(() => {
    router.get('/', [PageRangesController, 'index']) // Listar todos los rangos
    router.post('/', [PageRangesController, 'store']) // Crear un nuevo rango
    router.get('/:id', [PageRangesController, 'show']) // Mostrar un rango por ID
    router.put('/:id', [PageRangesController, 'update']) // Actualizar un rango
    router.patch('/:id', [PageRangesController, 'update']) // Actualización parcial
    router.delete('/:id', [PageRangesController, 'destroy']) // Eliminar un rango (definitivo)
  })
  .prefix('/page-ranges')
  .middleware(middleware.auth({ guards: ['api'] }))
