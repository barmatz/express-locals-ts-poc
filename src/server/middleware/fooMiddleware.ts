import type { Request, Response } from 'express';

export function fooMiddleware(_req: Request, res: Response) {
  const { myBoolean } = res.locals;

  res.send(`Hello from /foo route! locals.myBoolean is: ${myBoolean}`);
}
