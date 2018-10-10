'use strict';

const ok = (res, options = {}) => {
  res.status(options.statusCode || options.code || 200).json({
    message: options.message || 'OK',
    data: options.data || {}
  })
};


const error = (res, error = {}) => {
  res.status(error.statusCode || error.code || 500).json({
    message: error.message || 'Internal Server Error'
  });
};

module.exports = {
  ok,
  error
}