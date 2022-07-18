const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const config = require('./utils/config');
const rootRoute = require('./routes');
const mongoose = require('./db/mongoose');
const redis = require('./db/redis');
const errorHandler = require('./middlewares/errorHandler');

const app = express();
const PORT = config.port;

// Middlewares
app.use(
  cors({
    origin: [config.env === 'DEVELOPMENT' ? 'http://localhost:3000' : '*'],
    credentials: true,
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Router
app.use(rootRoute);

// Error handler
app.use(errorHandler.error404);
app.use(errorHandler.sendMessage);

// Start running server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Handle on exit
  process.on('SIGINT', async () => {
    await mongoose.close();
    await redis.disconnect();

    console.log('Server shutdown');
    process.exit(0);
  });
});
