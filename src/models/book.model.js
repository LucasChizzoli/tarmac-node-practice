'use strict';

const knex = require('knex')(require('../../knexfile'));
const BOOKS_TABLE = 'books';

const Book = {
  getAll: async () => {
    return knex.select().table(BOOKS_TABLE);
  },
  getById: async (id) => {
    return knex(BOOKS_TABLE).where({id: id}).first();
  },
  createBook: async (book) => {
    return knex(BOOKS_TABLE).returning('id').insert(book);
  }
}

module.exports = Book