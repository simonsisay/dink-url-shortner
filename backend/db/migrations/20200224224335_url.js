exports.up = function(knex) {
  return Promise.all([
    knex.schema.createTable("url", table => {
      table.increments("id").primary();
      table.text("original").notNullable();
      table.string("short");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table.unique("short");
    })
  ]);
};

exports.down = function(knex) {
  return Promise.all([knex.schema.dropTable("url")]);
};
