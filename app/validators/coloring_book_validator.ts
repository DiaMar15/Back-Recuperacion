// start/validators/coloring_book_validator.ts
import vine from '@vinejs/vine'

export const coloringBookValidator = vine.compile(
  vine.object({
    titulo: vine.string().minLength(2),
    autor: vine.string().minLength(2),
    categoria: vine.string().minLength(2),
    descripcion: vine.string().minLength(10),
    precio: vine.number().positive(),
    activo: vine.boolean().optional(),
    cantidadPaginas: vine.number().positive().max(1000),
    popularidad: vine.number().min(0),
    destacado: vine.boolean().optional(),
    pageRangeId: vine.number().positive(), // FK
    portada: vine.string().optional(),
  })
)

export const partialColoringBookValidator = vine.compile(
  vine.object({
    titulo: vine.string().minLength(2).optional(),
    autor: vine.string().minLength(2).optional(),
    categoria: vine.string().minLength(2).optional(),
    descripcion: vine.string().minLength(10).optional(),
    precio: vine.number().positive().optional(),
    activo: vine.boolean().optional(),
    cantidadPaginas: vine.number().positive().max(1000).optional(),
    popularidad: vine.number().min(0).optional(),
    destacado: vine.boolean().optional(),
    pageRangeId: vine.number().positive().optional(), // FK
    portada: vine.string().optional(),
  })
)
