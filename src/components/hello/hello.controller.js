'use strict';

const controller = {
  sayHello: async (req, res) => {
    try {
      res.status(200).json({
        message: "Hello"
      });
    } catch (error) {
      throw error;
    }
  }
};

module.exports = controller;

