import { ContainerModule, injectable } from "inversify";
import { AlfredError } from "../../../utils/errors/alfred.error";
import container from "../../../utils/inversify.config";
import TYPES from "../../../utils/types";
import { DatabaseConfiguration } from "../models/database_configuration.interface";
import { DatabaseConfigurationService } from "./database_configuration.interface";

@injectable()
export class MongoDBDatabaseConfigurationService
  implements DatabaseConfigurationService
{
  public store = async (configuration: any): Promise<void> => {
    const variableConfiguration = new ContainerModule(async (bind) => {
      try {
        bind<DatabaseConfiguration>(
          TYPES.DATABASE.MongoDBDatabaseConfiguration
        ).toConstantValue(configuration);
      } catch (e: any) {
        throw new AlfredError("RETRIEVE_CONFIGURATION_FAILED", e.message);
      }
    });
    container.load(variableConfiguration);
  };

  public getConfiguration = (): DatabaseConfiguration => {
    return container.get<DatabaseConfiguration>(
      TYPES.DATABASE.MongoDBDatabaseConfiguration
    );
  };
}
