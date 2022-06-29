const { registerValidation } = require('../validations/auth');
const { Conflict } = require('http-errors');
const User = require('../models/user');

module.exports = {
  async register(req, res, next) {
    try {
      await registerValidation(req.body);
      const { username, avatarURL, password } = req.body;

      const isExist = await User.findOne({ username });
      if (isExist) throw new Conflict(`${username} already exists`);

      const newUser = new User({
        username,
        avatarURL: avatarURL ?? null,
        password,
      });
      const { password: newPassword, ...saveUser } = (await newUser.save()).toObject();

      res.json({ ...saveUser });
    } catch (error) {
      next(error);
    }
  },
};
