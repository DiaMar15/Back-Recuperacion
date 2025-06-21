import vine from '@vinejs/vine'

export const coloringBookValidator = vine.compile(
  vine.object({
    titulo: vine.string().minLength(2).maxLength(100),
    autor: vine.string().minLength(2).maxLength(100),
    categoria: vine.string().minLength(2).maxLength(100),
    descripcion: vine.string().minLength(10),
    precio: vine.number().positive(),
    activo: vine.boolean().optional(),
    cantidadPaginas: vine.number().positive().max(1000),
    popularidad: vine.number().min(0),
  })
)

export const partialColoringBookValidator = vine.compile(
  vine.object({
    titulo: vine.string().minLength(2).maxLength(100).optional(),
    autor: vine.string().minLength(2).maxLength(100).optional(),
    categoria: vine.string().minLength(2).maxLength(100).optional(),
    descripcion: vine.string().minLength(10).optional(),
    precio: vine.number().positive().optional(),
    activo: vine.boolean().optional(),
    cantidadPaginas: vine.number().positive().max(1000).optional(),
    popularidad: vine.number().min(0).optional(),
  })
)
