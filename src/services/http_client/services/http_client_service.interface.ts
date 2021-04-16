import { AxiosRequestConfig } from "axios";

export interface HTTPClientService {
  get(url: string, data: any, configs?: AxiosRequestConfig): Promise<any>;
  post(url: string, data: any, configs?: AxiosRequestConfig): Promise<any>;
  put(url: string, data: any, configs?: AxiosRequestConfig): Promise<any>;
  delete(url: string, data: any, configs?: AxiosRequestConfig): Promise<any>;
}
