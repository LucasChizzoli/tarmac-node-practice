'use strict';

const knex = require('knex')(require('../../knexfile'));
const USER_TABLE = 'users';

const User = {
  login: async (email) => {
    return knex(USER_TABLE).where({email: email}).first();
  },
  getAll: async () => {
    return knex.select().table(USER_TABLE);
  },
  getById: async (id) => {
    return knex(USER_TABLE).where({id: id}).first();
  },
  insert: async (user) => {
    return knex(USER_TABLE).returning('id').insert(user);
  }
}

module.exports = User