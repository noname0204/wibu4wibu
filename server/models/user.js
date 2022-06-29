const { Schema } = require('mongoose');
const mongoose = require('../db/mongoose');
const bcrypt = require('bcrypt');

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

// Auto hash password before save to database
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

schema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    return false;
  }
};

module.exports = mongoose.model('user', schema);
