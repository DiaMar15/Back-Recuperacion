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

  @column()
  public cantidadPaginas: number

  @column()
  public popularidad: number

  // ✅ Agregado: campo destacado
  @column()
  public destacado: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
