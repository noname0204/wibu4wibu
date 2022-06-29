const mongoose = require('mongoose');
const { DB_URL } = require('../utils/config');

const mongooseDB = mongoose.createConnection(DB_URL);

mongooseDB.on('connected', () => {
  console.log('MongooseDB connected');
});

mongooseDB.on('disconnected', () => {
  console.log('MongooseDB disconnected');
});

mongooseDB.on('error', (err) => {
  console.log('MongooseDB error::', JSON.stringify(err));
});

module.exports = mongooseDB;
