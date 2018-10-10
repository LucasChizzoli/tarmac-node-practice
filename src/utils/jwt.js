'use strict';

const jwt = require('jsonwebtoken');
const { authConfig } = require('config/');

module.exports = {
  createToken: (auth) => {
    return jwt.sign({
      id: auth.id
    }, authConfig.secretKey , {
      expiresIn: authConfig.expiration
    });
  }
};
