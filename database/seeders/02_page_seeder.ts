import { BaseSeeder } from '@adonisjs/lucid/seeders'
import PageRange from '#models/page_range'

export default class extends BaseSeeder {
  async run() {
    await PageRange.createMany([
      {
        nombre: 'Corto (menos de 50 páginas)',
        minPaginas: 0,
        maxPaginas: 20,
      },
      {
        nombre: 'Medio (50-100 páginas)',
        minPaginas: 21,
        maxPaginas: 50,
      },
      {
        nombre: 'Largo (más de 100 páginas)',
        minPaginas: 51,
        maxPaginas: 100,
      },
    ])
  }
}
