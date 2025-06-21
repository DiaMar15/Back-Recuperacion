import type { HttpContext } from '@adonisjs/core/http'
import PageRange from '#models/page_range'
import { pageRangeValidator } from '#validators/page_range_validator'

export default class PageRangesController {
  /**
   * Listar todos los rangos de páginas
   * GET /page-ranges
   */
  public async index() {
    return await PageRange.query().orderBy('min_paginas', 'asc')
  }

  /**
   * Crear un nuevo rango de páginas con validación completa
   */
  public async store({ request, response }: HttpContext) {
    const data = await request.validateUsing(pageRangeValidator)
    const range = await PageRange.create(data)
    return response.created(range)
  }

  /**
   * Mostrar un solo rango por ID
   */
  public async show({ params, response }: HttpContext) {
    const range = await PageRange.find(params.id)

    if (!range) {
      return response.notFound({ message: 'Rango no encontrado' })
    }

    return range
  }

  /**
   * Actualizar un rango con validación parcial
   */
  public async update({ params, request, response }: HttpContext) {
    const range = await PageRange.find(params.id)

    if (!range) {
      return response.notFound({ message: 'Rango no encontrado' })
    }

    const data = await request.validateUsing(pageRangeValidator)
    range.merge(data)
    await range.save()

    return range
  }

  /**
   * Eliminar un rango por ID
   */
  public async destroy({ params, response }: HttpContext) {
    const range = await PageRange.find(params.id)

    if (!range) {
      return response.notFound({ message: 'Rango no encontrado' })
    }

    await range.delete()
    return response.noContent()
  }
}
