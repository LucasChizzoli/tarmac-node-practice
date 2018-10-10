'use strct';

const expressJwt = require('express-jwt');
const { authConfig } = require('config/');

module.exports = {
  authenticate: expressJwt({
    secret: authConfig.secretKey,
    requestProperty: authConfig.requestProperty,
    getToken: (req) => {
      if (req.headers[authConfig.headerName]) {
        return req.headers[authConfig.headerName];
      }
      return null;
    }
  })
};