import { MemoryCacheService } from "./memory_cache_service.interface";
import Redis from "redis";

export class RedisService implements MemoryCacheService {
  private _client: any;

  constructor() {
    this._client = Redis.createClient(
      parseInt(process.env.REDIS_PORT!),
      process.env.REDIS_HOST
    );
  }

  public write = async (key: string, value: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      this._client.set(
        key,
        value,
        "EX",
        3600,
        (error: Error, response: any) => {
          if (!error) {
            resolve(response);
          } else {
            reject(error);
          }
        }
      );
    });
  };

  public read = async (key: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      this._client.get(key, (error: Error, response: any) => {
        if (!error) {
          resolve(response);
        } else {
          reject(error);
        }
      });
    });
  };

  public connectionCheck = async (): Promise<any> => {
    this._client.on("connect", function () {
      console.log("connect");
    });
    this._client.quit();
  };
}
