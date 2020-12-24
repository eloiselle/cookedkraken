import { DbEnv } from "../databaseProperties.js";

export module createTable {

  export function favorite() {

    return DbEnv.schema.createTable('favorite', function (table: any) {
      table.integer('id_user')
        .unsigned()
        .notNullable()
        .references("user.id_user")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('id_meal')
        .unsigned()
        .notNullable()
        .references("meal.id_meal")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    })
  }

  export function ingredient() {

    return DbEnv.schema.createTable('ingredient', function (table: any) {
      table.increments('id_ingredient')
      table.string('name').notNullable()
      table.string('image_url')
      table.string('description')
      table.integer('hp_value').notNullable()
      table.integer('hunger_value').notNullable()
      table.integer('sanity_value').notNullable()
      table.integer('spoil_time').notNullable()
      table.boolean('can_cook').notNullable()

      table.integer('id_version_specific')
        .unsigned()
        .notNullable()
        .references("version.id_version_specific")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    })
  }

  export function ingredientType() {

    return DbEnv.schema.createTable('ingredient_type', function (table: any) {
      table.increments('id_ingredient_type')
      table.string('name').notNullable()
      table.string('description')
    })
  }

  export function inventory() {

    return DbEnv.schema.createTable('inventory', function (table: any) {

      table.integer('id_user')
        .unsigned()
        .notNullable()
        .references("user.id_user")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('id_ingredient')
        .unsigned()
        .notNullable()
        .references("ingredient.id_ingredient")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('quantity').unsigned().notNullable()
      table.primary(['id_user', 'id_ingredient']);
    })
  }

  export function meal() {

    return DbEnv.schema.createTable('meal', function (table: any) {
      table.increments('id_meal')
      table.string('name').notNullable()
      table.string('description')
      table.string('image_url')
      table.integer('cook_time').unsigned().notNullable()
      table.integer('hp_value').notNullable()
      table.integer('hunger_value').notNullable()
      table.integer('sanity_value').notNullable()
      table.integer('spoil_time').unsigned().notNullable()
      table.integer('priority').notNullable()

      table.integer('id_version_specific')
        .unsigned()
        .notNullable()
        .references("version.id_version_specific")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  export function objectInstance() {

    return DbEnv.schema.createTable('object_instance', function (table: any) {
      table.increments('id_object_instance')
      table.string('name').notNullable()
      table.string('image_url')
      table.string('description')

      table.integer('id_object_type')
        .unsigned()
        .notNullable()
        .references("object_type.id_object_type")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('id_version_specific')
        .unsigned()
        .notNullable()
        .references("version.id_version_specific")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    })
  }

  export function objectType() {

    return DbEnv.schema.createTable('object_type', function (table: any) {
      table.increments('id_object_type')
      table.string('name').notNullable()
      table.string('description')
    })
  }

  export function permission() {

    return DbEnv.schema.createTable('permission', function (table: any) {
      table.increments('id_permission')
      table.string('name').notNullable()
      table.string('description')
    })
  }

  export function session() {

    return DbEnv.schema.createTable('session', function (table: any) {
      table.increments('id_session')
      table.string('token').notNullable().unique()
      table.integer('expiration').unsigned().notNullable()
      table.string('ipv4').notNullable()

      table.integer('id_user')
        .unsigned()
        .notNullable()
        .references("user.id_user")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  export function taIngredientObjectInstance() {

    return DbEnv.schema.createTable('ta_ingredient_object_instance', function (table: any) {

      table.integer('id_object_instance')
        .unsigned()
        .notNullable()
        .references("object_instance.id_object_instance")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('id_ingredient')
        .unsigned()
        .notNullable()
        .references("ingredient.id_ingredient")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('drop_chance').unsigned().notNullable()
      table.primary(['id_object_instance', 'id_ingredient']);
    })
  }

  export function taIngredientIngredientType() {

    return DbEnv.schema.createTable('ta_ingredient_ingredient_type', function (table: any) {

      table.integer('id_ingredient')
        .unsigned()
        .notNullable()
        .references("ingredient.id_ingredient")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('id_ingredient_type')
        .unsigned()
        .notNullable()
        .references("ingredient_type.id_ingredient_type")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('type_value').unsigned().notNullable()
      table.primary(['id_ingredient', 'id_ingredient_type']);
    })
  }

  export function taMealIngredientType() {

    return DbEnv.schema.createTable('ta_meal_ingredient_type', function (table: any) {

      table.integer('id_meal')
        .unsigned()
        .notNullable()
        .references("meal.id_meal")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('id_ingredient_type')
        .unsigned()
        .notNullable()
        .references("ingredient_type.id_ingredient_type")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('type_value').unsigned().notNullable()
      table.primary(['id_meal', 'id_ingredient_type']);
    })
  }

  export function taMealIngredient() {

    return DbEnv.schema.createTable('ta_meal_ingredient', function (table: any) {

      table.integer('id_meal')
        .unsigned()
        .notNullable()
        .references("meal.id_meal")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('id_ingredient')
        .unsigned()
        .notNullable()
        .references("ingredient.id_ingredient")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.integer('quantity').unsigned().notNullable()
      table.primary(['id_meal', 'id_ingredient']);
    })
  }

  export function user() {

    return DbEnv.schema.createTable('user', function (table: any) {
      table.increments('id_user')
      table.string('username').notNullable().unique()
      table.string('password').notNullable()

      table.integer('id_permission')
        .unsigned()
        .notNullable()
        .references("permission.id_permission")
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

    })
  }

  export function version() {

    return DbEnv.schema.createTable('version', function (table: any) {
      table.increments('id_version_specific')
      table.string('name').notNullable()
      table.string('description')
    })
  }
}