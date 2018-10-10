'use strict';

const options = {
  development: {
      client: 'mysql',
      connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'node_practice'
      },
      migrations: {
          directory: __dirname + '/src/db/migrations',
        },
      seeds: {
          directory: __dirname + '/src/db/seeds',
        },
    },
  production: {
      client: 'mysql',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/src/db/migrations',
        },
      seeds: {
          directory: __dirname + '/src/db/seeds/production',
        },
    },
};

const environment = process.env.NODE_ENV || 'development';
const config = options[environment];

module.exports = config;