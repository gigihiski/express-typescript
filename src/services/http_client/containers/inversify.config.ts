import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import HTTP_CLIENT from "./types";
import { HTTPClientService } from "../services/http_client_service.interface";
import { AxiosService } from "../services/axios_service.class";

// HTTP Client
const HTTPClientContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<HTTPClientService>(HTTP_CLIENT.AxiosHTTPClientService).to(AxiosService);
});

export default HTTPClientContainer;
