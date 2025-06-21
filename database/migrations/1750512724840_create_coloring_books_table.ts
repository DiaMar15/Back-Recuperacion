import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'coloring_books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('titulo')
      table.string('autor')
      table.string('categoria')
      table.text('descripcion')
      table.decimal('precio', 7, 0)
      table.boolean('activo').defaultTo(true)
      table.integer('cantidad_paginas') // ✅ Funcionalidad adicional 1
      table.integer('popularidad').defaultTo(0) // ✅ Funcionalidad adicional 2
      table.boolean('destacado').defaultTo(false)
      table.timestamps()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
