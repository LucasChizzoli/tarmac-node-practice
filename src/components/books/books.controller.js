'use strict';

const { Book, validateBook } = require('models/');
const {responseHandler , statusCodes } = require('utils/');

const controller = {
  getAll: async (req, res) => {
    try {
      responseHandler.ok(res, {
        data:await Book.getAll()
      })
    } catch (error) {
      throw error;
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.getById(id);
      
      if(!book) {
        throw {
          code: statusCodes.NotFound,
          message: 'Book not found'
        };
      }
    
      responseHandler.ok(res, {
        data: book
      });

    } catch (error) {
      responseHandler.error(res, {
        message: error.message,
        statusCode: error.code
      });
    }
  },
  createBook: async (req, res) => {
    try {
      const { body } = req;
    if(!validateBook.validateBook(body)) {
      throw {
        code: statusCodes.BadRequest,
        message: 'Invalid Book Data'
      };
    }

    responseHandler.ok(res, {
      data: await Book.createBook(body)
    });
    } catch(error) {
      responseHandler.error(res, {
        message: error.message,
        statusCode: error.code
      });
    }
  }
};

module.exports = controller;