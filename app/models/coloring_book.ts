import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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
  public precio: number

  @column()
  public activo: boolean

  // ✅ Funcionalidad adicional 1
  @column()
  public cantidadPaginas: number

  // ✅ Funcionalidad adicional 2
  @column()
  public popularidad: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
