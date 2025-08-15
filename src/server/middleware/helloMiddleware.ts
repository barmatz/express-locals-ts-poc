import type { Request, Response } from 'express';

export function helloMiddleware(_req: Request, res: Response) {
  res.send('Hello, Express!');
}
