import morgan from 'morgan';
import { logger } from '../../logger';

export const loggerMiddleware = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  {
    stream: {
      write: (message) => logger.info(message.trim()),
    },
  },
);
