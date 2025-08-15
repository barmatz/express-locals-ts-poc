import type { Request, Response } from 'express';

export function barMiddleware(_req: Request, res: Response) {
  const { myNumber } = res.locals;

  res.send(`Hello from /bar route! locals.myNumber is: ${myNumber}`);
}
