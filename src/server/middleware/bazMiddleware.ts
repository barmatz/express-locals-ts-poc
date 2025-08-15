import type { Request, Response } from 'express';

export function bazMiddleware(_req: Request, res: Response) {
  const { myString } = res.locals;

  res.send(`Hello from /baz route! locals.myString is: ${myString}`);
}
