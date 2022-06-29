const mongoose = require('mongoose');
const { databaseURL } = require('../utils/config');

const mongooseDB = mongoose.createConnection(databaseURL);

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
