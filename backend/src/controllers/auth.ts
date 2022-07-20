import type { Handler } from 'express';
import type { LoginValidation, RegisterValidation } from '~/types/validations';
import type { TokenPayload } from '~/utils/jwt';
import User from '~/models/user';
import httpErrors from 'http-errors';
import setCookie from '~/utils/cookie';
import redis from '~/db/redis';
import { registerValidation, loginValidation } from '~/validations/auth';
import { signAccessToken, signRefreshToken } from '~/utils/jwt';

export const register: Handler = async (req, res, next) => {
  try {
    const { error } = registerValidation(req.body);
    if (error) throw new httpErrors.BadRequest(error.message);

    const { username, avatarURL, password } = req.body as RegisterValidation;

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
};

export const login: Handler = async (req, res, next) => {
  try {
    const { error } = loginValidation(req.body);
    if (error) throw new httpErrors.BadRequest(error.details[0].message);

    const { username, password } = req.body as LoginValidation;

    const user = await User.findOne({ username });
    if (!user) throw new httpErrors.NotFound(`Account "${username}" does not exist`);

    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) throw new httpErrors.Unauthorized('Wrong password');

    const userPublicInfo = user.toClient();
    const accessToken = await signAccessToken(userPublicInfo);
    const refreshToken = await signRefreshToken(userPublicInfo);

    setCookie(res, 'refresh_token', refreshToken);
    res.status(200).json({ ...userPublicInfo, access_token: accessToken });
  } catch (error) {
    next(error);
  }
};

export const refreshToken: Handler = async (req, res, next) => {
  try {
    const payload = req.body.payload as TokenPayload;
    const accessToken = await signAccessToken(payload);
    const refreshToken = await signRefreshToken(payload);

    setCookie(res, 'refresh_token', refreshToken);
    res.status(200).json({ access_token: accessToken });
  } catch (error) {
    next(error);
  }
};

export const refresh: Handler = async (req, res, next) => {
  try {
    const payload = req.body.payload as TokenPayload;
    const user = await User.findOne({ _id: payload.id });

    if (!user) throw new httpErrors.NotFound('User not found');
    res.status(200).json({ ...user.toClient() });
  } catch (error) {
    next(error);
  }
};

export const logout: Handler = (req, res, next) => {
  try {
    res.clearCookie('refresh_token');
    redis.del(req.body.payload.id, (error) => {
      if (error) throw new httpErrors.InternalServerError();
      res.status(200).json({ message: 'Logout success' });
    });
  } catch (error) {
    next(error);
  }
};
