const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { PORT } = require('./utils/config');
const rootRoute = require('./routes');
const mongooseDB = require('./db/mongoose');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Middlewares
app.use(cors());
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
    await mongooseDB.close();

    console.log('Server shutdown');
    process.exit(0);
  });
});
