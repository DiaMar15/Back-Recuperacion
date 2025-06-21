// start/validators/page_range_validator.ts
import vine from '@vinejs/vine'

export const pageRangeValidator = vine.compile(
  vine.object({
    nombre: vine.string().minLength(2),
    minPaginas: vine.number().min(0),
    maxPaginas: vine.number().min(1),
  })
)
