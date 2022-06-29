const { Schema } = require('mongoose');
const bcrypt = require('bcrypt');
const mongooseConnection = require('../db/mongoose');

const schema = new Schema(
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
    },
  },
  { versionKey: false }
);

schema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;

    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongooseConnection.model('user', schema);
