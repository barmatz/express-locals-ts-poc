import 'express';

declare module 'express-serve-static-core' {
  interface Locals {
    myBoolean: boolean;
    myNumber: number;
    myString: string;
  }
}

declare module 'express' {
  interface Response {
    locals: Partial<Locals>;
  }
}
