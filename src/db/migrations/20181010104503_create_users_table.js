
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (t) => {
    t.increments('id').primary();
    t.string('email').notNullable();
    t.string('password').notNullable();
    t.timestamp('created_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
