'use strict';

require('app-module-path').addPath(__dirname + '/src');

const { startServer } = require('server/');
const { serverConfig } = require('config/');

startServer(serverConfig).catch(error => {
  console.error('Server couldn\'t be started');
  console.error(error);
});