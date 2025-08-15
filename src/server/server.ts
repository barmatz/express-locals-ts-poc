import config from 'config';
import express from 'express';
import { logger } from '../logger';
import { configRoutes } from './routes';

const app = express();

configRoutes(app);

const host = config.get<string>('server.host') || 'localhost';

const port = config.get<number>('server.port') || 3000;

app.listen(port, host, () => {
  logger.info(`Server is running at http://${host}:${port}`);
});
