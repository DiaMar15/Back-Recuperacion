import { BaseSchema } from '@adonisjs/lucid/schema'

export default class ColoringBooks extends BaseSchema {
  protected tableName = 'coloring_books'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('titulo').notNullable()
      table.string('autor').notNullable()
      table.string('categoria').notNullable()
      table.text('descripcion').notNullable()
      table.decimal('precio', 7, 0).notNullable()
      table.boolean('activo').defaultTo(true)
      table.integer('cantidad_paginas').unsigned().notNullable()
      table.integer('popularidad').unsigned().defaultTo(0)
      table.boolean('destacado').defaultTo(false)

      // ✅ Llave foránea a page_ranges
      table
        .integer('page_range_id')
        .unsigned()
        .references('id')
        .inTable('page_ranges')
        .onDelete('SET NULL')
        .nullable()

      // ✅ Soft delete y timestamps
      table.timestamp('deleted_at').nullable()
      table.timestamps(true, true)
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
