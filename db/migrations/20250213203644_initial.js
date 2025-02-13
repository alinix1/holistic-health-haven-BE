/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("products", function (table) {
      table.increments("id").primary();
      table.specificType("product_type", "TEXT[]").notNullable();
      table.string("product_title", 255).notNullable();
      table.text("img").notNullable();
      table.text("product_description").notNullable();
      table.decimal("price", 10, 2).notNullable();
    })
    .createTable("reviews", function (table) {
      table.increments("id").primary();
      table.integer("holistic_product_id").unsigned().notNullable();
      table.foreign("holistic_product_id").references("id").inTable("products");
      table.string("user_name", 100).notNullable();
      table.text("user_review").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("reviews").dropTableIfExists("products");
};
