'use strict';

const Book = require('./book.model');
const User = require('./user.model');
const validateBook = require('./book.validate');

module.exports = {
  Book,
  validateBook,
  User
};