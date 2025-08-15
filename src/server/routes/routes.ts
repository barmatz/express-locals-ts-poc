import type { Express } from 'express';
import {
  barMiddleware,
  bazMiddleware,
  fooMiddleware,
  helloMiddleware,
  loggerMiddleware,
  setupLocalsMiddleware,
} from '../middleware';

export function configRoutes(app: Express) {
  app.use(loggerMiddleware);
  app.use(setupLocalsMiddleware);
  app.get('/', helloMiddleware);
  app.get('/bar', barMiddleware);
  app.get('/baz', bazMiddleware);
  app.get('/foo', fooMiddleware);
}
