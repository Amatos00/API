'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FollowerSchema extends Schema {
  up () {
    this.create('followers', (table) => {
      table.increments()
      table
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
    this.drop('followers')
  }
}

module.exports = FollowerSchema
