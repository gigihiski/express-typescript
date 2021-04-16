import Axios, { AxiosRequestConfig, AxiosStatic } from "axios";
import qs from "qs";
import { injectable } from "inversify";
import "reflect-metadata";
import { HTTPClientService } from "./http_client_service.interface";

@injectable()
export class AxiosService implements HTTPClientService {
  private _client: AxiosStatic;

  constructor() {
    this._client = Axios;
  }

  public get = async (
    url: string,
    data?: any,
    configs?: AxiosRequestConfig
  ): Promise<any> => {
    let queryString = "";
    if (data != undefined) {
      queryString = `?${qs.stringify(data)}`;
    }
    const response = await this._client.get(url + `${queryString}`, configs);
    return response.data;
  };

  public post = async (
    url: string,
    data: any,
    configs?: AxiosRequestConfig
  ): Promise<any> => {
    const response = await this._client.post(url, data, configs);
    return response.data;
  };

  public put = async (
    url: string,
    data: any,
    configs?: AxiosRequestConfig
  ): Promise<any> => {
    const response = await this._client.put(url, data, configs);
    return response.data;
  };

  public delete = async (
    url: string,
    data: any,
    configs?: AxiosRequestConfig
  ): Promise<any> => {
    const queryString = qs.stringify(data);
    const response = await this._client.delete(
      url + `?${queryString}`,
      configs
    );
    return response.data;
  };
}
