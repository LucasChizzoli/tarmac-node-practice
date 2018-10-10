
exports.up = function(knex, Promise) {
  return knex.schema.createTable('books', (t) => {
    t.increments('id').primary()
    t.string('isbn').notNullable()
    t.string('title').notNullable()
    t.string('publisher').notNullable()
    t.string('releaseDate').notNullable()
    t.string('website').notNullable()
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('books');
};
