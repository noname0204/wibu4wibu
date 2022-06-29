const mongoose = require('mongoose');
const { DB_URL } = require('../utils/config');

const mongooseConnection = mongoose.createConnection(DB_URL);

mongooseConnection.on('connected', () => {
  console.log('MongooseDB connected');
});

mongooseConnection.on('disconnected', () => {
  console.log('MongooseDB disconnected');
});

mongooseConnection.on('error', (err) => {
  console.log('MongooseDB error::', JSON.stringify(err));
});

module.exports = mongooseConnection;
