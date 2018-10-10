'use strict';

const router = require('express').Router();
const controller = require('./hello.controller');

router.use('/', controller.sayHello);

module.exports = router;