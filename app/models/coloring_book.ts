import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import PageRange from '#models/page_range'

export default class ColoringBook extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public titulo: string

  @column()
  public autor: string

  @column()
  public categoria: string

  @column()
  public descripcion: string

  @column()
  public precio: number // Entero (sin decimales)

  @column()
  public activo: boolean

  @column()
  public cantidadPaginas: number

  @column()
  public popularidad: number

  @column()
  public destacado: boolean

  @column()
  public pageRangeId: number | null

  // ✅ Relación con rango de páginas
  @belongsTo(() => PageRange)
  public pageRange: BelongsTo<typeof PageRange>

  // ✅ Soft delete
  @column.dateTime()
  public deletedAt: DateTime | null

  // ✅ Timestamps
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
