import { SecretManagerConfiguration } from "../models/secret_manager_configuration.class";

export interface SecretManagerRepository {
  write(
    key: string,
    configuration: SecretManagerConfiguration
  ): Promise<SecretManagerConfiguration | Error>;
  read(key: string): Promise<SecretManagerConfiguration | Error>;
}
