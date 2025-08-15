import chalk from 'chalk';
import { createLogger, format, transports } from 'winston';

export const logger = createLogger({
  format: format.combine(
    format.simple(),
    format.timestamp(),
    format.colorize({ level: true }),
    format.printf(({ level, message, timestamp }) => {
      return `${level}: ${String(message)} ${chalk.italic(chalk.gray(`(${String(timestamp)})`))}`;
    }),
  ),
  level: 'info',
  transports: [new transports.Console()],
});
