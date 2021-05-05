import { Request } from "express";

export interface TokenController {
  verify(req: Request): Promise<any>;
}
