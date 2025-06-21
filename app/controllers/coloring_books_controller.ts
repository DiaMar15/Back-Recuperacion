import type { HttpContext } from '@adonisjs/core/http'
import ColoringBook from '#models/coloring_book'
import { DateTime } from 'luxon'
import {
  coloringBookValidator,
  partialColoringBookValidator,
} from '#validators/coloring_book_validator'

export default class ColoringBooksController {
  /**
   * Listar libros con filtros opcionales: activo, popularidad, categoría
   * GET /coloring-books?activo=true&min_popularidad=1000&categoria=Mandala
   */
  public async index({ request }: HttpContext) {
    const query = ColoringBook.query().whereNull('deleted_at')

    const activo = request.input('activo')
    const minPopularidad = request.input('min_popularidad')
    const categoria = request.input('categoria')

    if (activo !== undefined) {
      query.where('activo', activo === 'true')
    }

    if (minPopularidad !== undefined) {
      query.where('popularidad', '>=', Number(minPopularidad))
    }

    if (categoria !== undefined) {
      query.where('categoria', categoria)
    }

    return await query.orderBy('created_at', 'desc')
  }

  /**
   * Crear un nuevo libro con validación completa
   */
  public async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(coloringBookValidator)
    const book = await ColoringBook.create(data)
    return response.created(book)
  }

  /**
   * Mostrar un solo libro por ID (solo si no está eliminado)
   */
  public async show({ params, response }: HttpContext) {
    const book = await ColoringBook.query().where('id', params.id).whereNull('deleted_at').first()

    if (!book) {
      return response.notFound({ message: 'Libro no encontrado' })
    }

    return book
  }

  /**
   * Actualizar un libro con validación parcial (solo si no está eliminado)
   */
  public async update({ params, request, response }: HttpContext) {
    const book = await ColoringBook.query().where('id', params.id).whereNull('deleted_at').first()

    if (!book) {
      return response.notFound({ message: 'Libro no encontrado' })
    }

    const data = await request.validateUsing(partialColoringBookValidator)
    book.merge(data)
    await book.save()

    return book
  }

  /**
   * Eliminar un libro por ID (Soft Delete)
   */
  public async destroy({ params, response }: HttpContext) {
    const book = await ColoringBook.query().where('id', params.id).whereNull('deleted_at').first()

    if (!book) {
      return response.notFound({ message: 'Libro no encontrado o ya eliminado' })
    }

    book.deletedAt = DateTime.now()
    await book.save()

    return response.noContent()
  }

  /**
   * Restaurar un libro eliminado
   */
  public async restore({ params, response }: HttpContext) {
    const book = await ColoringBook.query()
      .where('id', params.id)
      .whereNotNull('deleted_at')
      .first()

    if (!book) {
      return response.notFound({ message: 'Libro no encontrado o no está eliminado' })
    }

    book.deletedAt = null
    await book.save()

    return book
  }
}
