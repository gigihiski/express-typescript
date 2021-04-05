import { Database } from "./database.model";
import { DatabaseConfiguration } from "./database_configuration.interface";
import { injectable } from "inversify";

@injectable()
export class MongoDBConfiguration implements DatabaseConfiguration {
  constructor() {}

  public getConfiguration = (): Database => {
    const configuration: Database = {
      host: "",
      username: "",
      password: "",
      name: "",
      port: "",
      authMethod: "",
    };

    return configuration;
  };
}
