const { NotFound } = require('http-errors');

module.exports = {
  error404(req, res, next) {
    next(new NotFound('This route not exist'));
  },
  sendMessage(error, req, res, next) {
    const errorCode = error.status || 500;
    res.status(errorCode).json({
      status: errorCode,
      message: error.message,
    });
  },
};
