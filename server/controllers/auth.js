const User = require('../models/user');
const httpErrors = require('http-errors');
const setCookie = require('../utils/cookie');
const redis = require('../db/redis');
const { registerValidation, loginValidation } = require('../validations/auth');
const { signAccessToken, signRefreshToken } = require('../utils/jwt');

module.exports = {
  async register(req, res, next) {
    try {
      const { error } = registerValidation(req.body);
      if (error) throw new httpErrors.BadRequest(error.message);

      const { username, avatarURL, password } = req.body;

      const isExist = await User.findOne({ username });
      if (isExist) throw new httpErrors.Conflict(`Account "${username}" already exists`);

      const user = new User({
        username,
        avatarURL: avatarURL ?? null,
        password,
      });
      const { password: newPassword, ...newUser } = (await user.save()).toObject();
      const accessToken = await signAccessToken(newUser);
      const refreshToken = await signRefreshToken(newUser);

      setCookie(res, 'refresh_token', refreshToken);
      res.status(200).json({ ...newUser, accessToken });
    } catch (error) {
      next(error);
    }
  },
  async login(req, res, next) {
    try {
      const { error } = loginValidation(req.body);
      if (error) throw new httpErrors.BadRequest(error.details[0].message);

      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user) throw new httpErrors.NotFound(`Account "${username}" does not exist`);

      const isValidPassword = await user.isValidPassword(password);
      if (!isValidPassword) throw httpErrors.Unauthorized('Wrong password');

      const { password: userPassword, ...userPublicInfo } = user.toObject();
      const accessToken = await signAccessToken(user);
      const refreshToken = await signRefreshToken(user);

      setCookie(res, 'refresh_token', refreshToken);
      res.status(200).json({ ...userPublicInfo, accessToken });
    } catch (error) {
      next(error);
    }
  },
  async refresh(req, res, next) {
    try {
      const payload = req.tokenPayload;
      const accessToken = await signAccessToken(payload);
      const refreshToken = await signRefreshToken(payload);

      setCookie(res, 'refresh_token', refreshToken);
      res.status(200).json({ accessToken });
    } catch (error) {
      next(error);
    }
  },
  async logout(req, res, next) {
    try {
      res.clearCookie('refresh_token');
      redis.del(req.tokenPayload.id, (error) => {
        if (error) throw new httpErrors.InternalServerError();
        res.status(200).json({ message: 'Logout success' });
      });
    } catch (error) {
      next(error);
    }
  },
};
