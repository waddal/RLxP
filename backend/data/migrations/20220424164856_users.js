exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable("users", function (table) {
      table.increments("user_id").notNullable().unique().primary();
      table.string("email").notNullable();
      table.string("username", 12).notNullable();
      table.string("password", 24).notNullable();
      table.timestamps(true, true);
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists("users");
};

