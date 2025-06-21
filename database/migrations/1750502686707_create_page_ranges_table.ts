import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'page_ranges'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nombre') // Ej: "Corto", "Mediano", "Largo"
      table.integer('min_paginas')
      table.integer('max_paginas').nullable() // Puede ser null para "más de 50"
      table.timestamps()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
