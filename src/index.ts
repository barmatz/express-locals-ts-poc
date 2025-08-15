import { logger } from './logger';

logger.info('Initiating application startup...');

await import('./server');
