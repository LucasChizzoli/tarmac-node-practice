'use strict';

const args = require('yargs').argv;

module.exports = require('config.json')[args.env || 'LOCAL'];
