'use strict';
 
const controller = require('./auth.controller');
const router = require('express').Router();

router.post('/login', controller.login);
router.post('/register', controller.register);

module.exports = router;