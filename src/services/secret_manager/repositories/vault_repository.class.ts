import { injectable } from "inversify";
import { SecretManagerRepository } from "./secret_manager_repository.interface";
import { AlfredError } from "../../../utils/errors/alfred.error";
import Vault from "node-vault";
import { SecretManagerConfiguration } from "../models/secret_manager_configuration.class";

@injectable()
export class VaultRepository implements SecretManagerRepository {
  private _vault: Vault.client;

  constructor() {
    const options = {
      apiVersion: process.env.VAULT_VERSION,
      endpoint: process.env.VAULT_ENDPOINT,
      token: process.env.VAULT_TOKEN,
    };
    this._vault = Vault(options);
  }

  public write = async (
    key: string,
    configuration: SecretManagerConfiguration
  ): Promise<SecretManagerConfiguration | Error> => {
    return new Promise((resolve, reject) => {
      this._vault.unseal({ key: process.env.VAULT_KEY }).then(async () => {
        const configurationResponse = await this._vault
          .write(`${process.env.VAULT_SERVICE_NAME}/${key}`, configuration)
          .catch((e: any) => {
            reject(e);
          });
        resolve(configurationResponse.data);
      });
    });
  };

  public read = async (
    key: string
  ): Promise<SecretManagerConfiguration | Error> => {
    return new Promise((resolve, reject) => {
      this._vault.unseal({ key: process.env.VAULT_KEY }).then(async () => {
        const configurationResponse = await this._vault
          .read(`${process.env.VAULT_SERVICE_NAME}/${key}`)
          .catch((e: any) => {
            reject(e);
          });
        resolve(configurationResponse.data);
      });
    });
  };
}
