import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

import express, { json } from 'express';

import { config } from './config';
import { healthRouter } from './context/health';
import { corsMiddleware } from './middlewares/cors';

function bootstrap() {
  const app = express();

  app.use(corsMiddleware());
  app.use(json());

  app.use('/health', healthRouter);

  app.listen(config.server.port, () => {
    console.log(`[APP] - Starting application on port ${config.server.port}`);
  });
}

bootstrap();
