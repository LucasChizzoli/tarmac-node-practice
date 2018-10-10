'use strict';

const { responseHandler, statusCodes, crypto, jwt } = require('utils/');
const { User } = require('models/');


const controller = {
  login: async (req, res) => {
    try {
      const {
        email,
        password
      } = req.body;
      const user = await User.login(email);
      if(!user || !await crypto.compare(password, user.password)) {
        throw {
          code: statusCodes.Unauthorized,
          message: 'Bad credentials'
        };
      }

      const token = jwt.createToken({
        id: user.id
      });

      responseHandler.ok(res, {
        data: token
      });

    } catch (error) {
      responseHandler.error(res, {
        message: error.message,
        statusCode: error.code
      });
    }
  },
  register: async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      if (!email || !password) {
        throw {
          code: statusCodes.BadRequest,
          message: 'Mandatory fields not supplied'
        };
      }

      const user = {
        email: email,
        password: await crypto.hash(password)
      };

      responseHandler.ok(res, {
        data: await  User.insert(user)
      });

    } catch (error) {
      responseHandler.error(res, {
        message: error.message,
        statusCode: error.code
      });
    }
  }
};

module.exports = controller;