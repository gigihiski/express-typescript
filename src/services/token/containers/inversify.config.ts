import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import TOKEN from "./types";
import { TokenService } from "../services/token_service.interface";
import { JWTTokenService } from "../services/jwt_token_service.class";

// Token
const TokenContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<TokenService>(TOKEN.JWTTokenService).to(JWTTokenService);
});

export default TokenContainer;
