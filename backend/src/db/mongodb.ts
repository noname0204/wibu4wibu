import mongoose from 'mongoose';
import config from '~/utils/config';

const mongodb = mongoose.createConnection(config.mongoURL);

mongodb.on('connected', () => {
  console.log('MongooseDB connected');
});

mongodb.on('disconnected', () => {
  console.log('MongooseDB disconnected');
});

mongodb.on('error', (err) => {
  console.log('MongooseDB error::', JSON.stringify(err));
});

export default mongodb;
