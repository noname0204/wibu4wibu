import type { Handler } from 'express';
import type { TokenPayload } from '~/utils/jwt';
import httpErrors from 'http-errors';
import User from '~/models/user.model';
import hashPassword from '~/utils/hashPassword';
import { updateUserValidation } from '~/validations/user.validations';

export const updateUser: Handler = async (req, res, next) => {
  try {
    const { payload, ...requestBody } = req.body;
    const { id } = payload as TokenPayload;

    const { error, value } = updateUserValidation(requestBody);
    if (error || !value) throw new httpErrors.BadRequest(error.message);

    // Make sure username from request doesn't exists
    const _user = await User.findOne({ username: value.username });
    if (_user) {
      throw new httpErrors.Conflict(`Username '${value.username}' already exists`);
    }

    const hashedPassword = await hashPassword(value.password);
    const user = await User.findByIdAndUpdate(
      id,
      { ...value, password: hashedPassword },
      { new: true }
    );

    res.status(200).json({ ...user?.toClient() });
  } catch (error) {
    next(error);
  }
};
