import type { Handler, ErrorRequestHandler } from 'express';
import httpErrors from 'http-errors';

export const error404: Handler = (req, res, next) => {
  next(new httpErrors.NotFound('This route not exist'));
};

export const sendMessage: ErrorRequestHandler = (error, req, res, next) => {
  const errorCode = error.status || 500;
  res.status(errorCode).json({
    status: errorCode,
    message: error.message,
  });
};
