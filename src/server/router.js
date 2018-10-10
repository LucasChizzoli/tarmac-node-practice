'use strict';

const {
  jwtMiddleware
} = require('middlewares/');

const mountRoutes = (app) => {

  app.use('/api/auth', require('components/auth/auth.route'))

  app.use('/api/*', jwtMiddleware.authenticate);

  app.use('/api/hello', require('components/hello/hello.route'));
  app.use('/api/books', require('components/books/books.route'));
};

module.exports = {
  mountRoutes
}