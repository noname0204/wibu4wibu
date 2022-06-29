const joi = require('joi');

module.exports = {
  registerValidation(data) {
    const schema = joi.object({
      username: joi.string().min(3).max(10).required(),
      avatarURL: joi.string().uri().optional(),
      password: joi.string().min(3).required(),
    });

    return schema.validateAsync(data);
  },
  loginValidation(data) {
    const schema = joi.object({
      username: joi.string().min(3).max(10).required(),
      password: joi.string().min(3).required(),
    });

    return schema.validateAsync(data);
  },
};
