import { injectable } from "inversify";
import { AlfredError } from "../../../utils/errors/alfred.error";
import { TokenService } from "./token_service.interface";
import jsonwebtoken from "jsonwebtoken";

@injectable()
export class JWTTokenService implements TokenService {
  private _secret: string;

  constructor() {
    this._secret = "";
  }

  public setFile = async (path: string): Promise<void> => {
    if (path == undefined || path.length == 0)
      throw new AlfredError(
        "INVALID_SECRET_KEY",
        "Secret key can not be empty"
      );
    this._secret = path;
  };

  public generate = async (parameters: any): Promise<any> => {
    const token = jsonwebtoken.sign(parameters, this._secret, {
      algorithm: "HS256",
      expiresIn: "1h",
      issuer: process.env.JWT_TOKEN_ISSUER,
    });
    return token;
  };

  public verify = async (token: string): Promise<any> => {
    try {
      // Verify JWT Token using Secret (.Pem File or String)
      const result = jsonwebtoken.verify(token, this._secret);
      if (!result) {
        throw new Error();
      }
      return true;
    } catch (e) {
      return false;
    }
  };
}
