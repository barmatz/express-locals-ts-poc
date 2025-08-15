import type { Express } from 'express';

import { helloMiddleware, loggerMiddleware } from '../middleware';

export function configRoutes(app: Express) {
  app.use(loggerMiddleware);
  app.get('/', helloMiddleware);
}
