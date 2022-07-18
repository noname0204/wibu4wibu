const User = require('../models/user');
const httpErrors = require('http-errors');
const setCookie = require('../utils/cookie');
const redis = require('../db/redis');
const { registerValidation, loginValidation } = require('../validations/auth');
const { signAccessToken, signRefreshToken } = require('../utils/jwt');

module.exports = {
  // Register new user
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
      const newUser = (await user.save()).toClient();
      const accessToken = await signAccessToken(newUser);
      const refreshToken = await signRefreshToken(newUser);

      setCookie(res, 'refresh_token', refreshToken);
      res.status(201).json({ ...newUser, access_token: accessToken });
    } catch (error) {
      next(error);
    }
  },
  // Login user
  async login(req, res, next) {
    try {
      const { error } = loginValidation(req.body);
      if (error) throw new httpErrors.BadRequest(error.details[0].message);

      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user) throw new httpErrors.NotFound(`Account "${username}" does not exist`);

      const isValidPassword = await user.isValidPassword(password);
      if (!isValidPassword) throw httpErrors.Unauthorized('Wrong password');

      const userPublicInfo = user.toClient();
      const accessToken = await signAccessToken(user);
      const refreshToken = await signRefreshToken(user);

      setCookie(res, 'refresh_token', refreshToken);
      res.status(200).json({ ...userPublicInfo, access_token: accessToken });
    } catch (error) {
      next(error);
    }
  },
  // Get new access and refresh token when old access token expired
  async refreshToken(req, res, next) {
    try {
      const payload = req.tokenPayload;
      const accessToken = await signAccessToken(payload);
      const refreshToken = await signRefreshToken(payload);

      setCookie(res, 'refresh_token', refreshToken);
      res.status(200).json({ access_token: accessToken });
    } catch (error) {
      next(error);
    }
  },
  // Get user data with access token when user refresh or load page
  async refresh(req, res, next) {
    try {
      const payload = req.tokenPayload;
      const user = (await User.findOne({ _id: payload.id })).toClient();

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
  // Clear cookie and refresh token on redis db when user logout
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
