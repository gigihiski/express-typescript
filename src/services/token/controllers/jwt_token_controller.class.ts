import { Request } from "express";
import { inject, injectable } from "inversify";
import { AlfredError } from "../../../utils/errors/alfred.error";
import TOKEN from "../containers/types";
import { TokenService } from "../services/token_service.interface";
import { TokenController } from "./token_controller.interface";

@injectable()
export class JWTTokenController implements TokenController {
  private _tokenService: TokenService;

  constructor(@inject(TOKEN.JWTTokenService) tokenService: TokenService) {
    this._tokenService = tokenService;
  }

  public verify = async (req: Request): Promise<any> => {
    const token = req.query["token"];

    try {
      const response = await this._tokenService.verify(token!.toString());
      if (response instanceof AlfredError) throw response;
      return token;
    } catch (e) {
      return e;
    }
  };
}
