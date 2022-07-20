import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { error404, sendMessage } from '~/middlewares/errorHandler';
import config from '~/utils/config';
import rootRoute from '~/routes';

const app = express();

// Middlewares
app.use(
  cors({
    origin: [import.meta.env.DEV ? 'http://localhost:3000' : '*'],
    credentials: true,
  })
);
app.use(helmet());
app.use(cookieParser());
app.use(express.json({ limit: '10kb' }));

app.use(rootRoute);

// Error handler
app.use(error404);
app.use(sendMessage);

if (import.meta.env.PROD) app.listen(config.port);
export const server = app;
