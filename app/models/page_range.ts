import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import ColoringBook from '#models/coloring_book'

export default class PageRange extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string // Ej: "Menos de 20", "21 a 50", etc.

  @column()
  public minPaginas: number

  @column()
  public maxPaginas: number

  @hasMany(() => ColoringBook)
  public coloringBooks: HasMany<typeof ColoringBook>
}
