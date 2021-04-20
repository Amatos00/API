'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RepositoriesSchema extends Schema {
  up () {
    this.create('repositories', (table) => {
      table.increments()
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('Cascade')
      .onDelete('Cascade')
      table.string('content', 240).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('repositories')
  }
}

module.exports = RepositoriesSchema
