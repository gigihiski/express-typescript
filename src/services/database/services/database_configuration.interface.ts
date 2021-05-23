import { DatabaseConfiguration } from "../models/database_configuration.interface";

export interface DatabaseConfigurationService {
  store(configuration: any): Promise<void>;
  getConfiguration(): DatabaseConfiguration;
}
