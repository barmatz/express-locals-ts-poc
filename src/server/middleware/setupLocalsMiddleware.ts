import type { NextFunction, Request, Response } from 'express';

export function setupLocalsMiddleware(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  res.locals.myBoolean = true;
  res.locals.myNumber = 42;
  res.locals.myString = 'foo';

  next();
}
