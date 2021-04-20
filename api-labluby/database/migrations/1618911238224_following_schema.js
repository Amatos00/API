'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FollowingSchema extends Schema {
  up () {
    this.create('followings', (table) => {
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
    this.drop('followings')
  }
}

module.exports = FollowingSchema
