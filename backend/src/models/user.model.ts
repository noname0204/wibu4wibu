import type { UserModel, User } from '~/types/models';
import type { Model, CallbackError } from 'mongoose';
import mongoose from 'mongoose';
import mongodb from '~/db/mongodb';
import bcrypt from 'bcryptjs';
import hashPassword from '~/utils/hashPassword';

interface InstanceMethods {
  isValidPassword: (password: string) => Promise<boolean>;
  toClient: () => User;
}

const schema = new mongoose.Schema<UserModel, Model<UserModel, {}, InstanceMethods>>(
  {
    username: {
      type: String,
      unique: true,
      minlenght: 3,
      maxlenght: 10,
      required: true,
    },
    avatarURL: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      default: 'user',
    },
    password: {
      type: String,
      minlenght: 3,
      required: true,
      bcrypt: true,
    },
  },
  { versionKey: false }
);

// Auto hash password before save to database
schema.pre('save', async function (next) {
  try {
    const hashedPassword = await hashPassword(this.password);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

schema.methods.isValidPassword = async function (password: string) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    return false;
  }
};

schema.methods.toClient = function () {
  const obj = this.toObject();
  obj.id = obj._id;
  delete obj._id;
  delete obj.password;
  return obj as User;
};

export default mongodb.model<UserModel, Model<UserModel, {}, InstanceMethods>>(
  'user',
  schema
);
