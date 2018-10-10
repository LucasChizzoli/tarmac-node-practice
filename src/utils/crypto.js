'use strict';

const bcrypt = require('bcryptjs');
const saltRounds = 10;

const hash = async (data) => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(String(data), salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

const compare = (data, hash) => {
  return bcrypt.compare(data, hash);
};

module.exports = {
  hash,
  compare
};
