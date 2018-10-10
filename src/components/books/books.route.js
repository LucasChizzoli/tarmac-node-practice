'use strict';

const router = require('express').Router();
const controller = require('./books.controller');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.createBook);

module.exports = router;