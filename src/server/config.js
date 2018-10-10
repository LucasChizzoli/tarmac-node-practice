'use strict';

const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const configureApp = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(methodOverride());
  app.use(cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  }));
  return app;
};

module.exports = {
  configureApp
};