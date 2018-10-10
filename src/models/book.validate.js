'use strict';

const ISBN_LENGTH = 13;
const MINIMUM_LENGTH = 0;

const validateBook = (book) => {
  return validateIsbn(book.isbn) &&
  validateTitle(book.title) &&
  validatePublisher(book.publisher) &&
  //validateReleaseDate(book.releaseDate) &&
  validateWebsite(book.website); 
};

const validateIsbn = (isbn) => {
  return isbn.length === ISBN_LENGTH;
};

const validateTitle = (title) => {
  return title.length > MINIMUM_LENGTH;
};

const validatePublisher = (publisher) => {
  return publisher.length > MINIMUM_LENGTH;
};

const validateWebsite = (website) => {
  return website.length > MINIMUM_LENGTH;
};

const validateReleaseDate = (date) => {
  return date.length > MINIMUM_LENGTH;
};


module.exports = {
  validateBook,
  validatePublisher,
  validateTitle,
  validatePublisher,
  validateReleaseDate,
  validateWebsite
}