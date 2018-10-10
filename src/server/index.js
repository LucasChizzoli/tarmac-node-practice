'use strict'

const express = require('express');
const config = require('./config');
const router = require('./router');

const startServer = async (serverConfig) => {
  try {
    const { httpPort } = serverConfig;
    const app = express();
    config.configureApp(app);
    router.mountRoutes(app);
    app.listen(httpPort, () => {
      console.log(`Server up at port: ${httpPort}`);
    })
  } catch (error) {
    throw error;
  }
} 

module.exports = {
  startServer
}