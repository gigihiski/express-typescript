import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import DATABASE from "./types";
import { MongoDBDatabaseService } from "../services/mongodb_database_service.class";
import { DatabaseService } from "../services/database_service.interface";
import { DatabaseConfigurationService } from "../services/database_configuration.interface";
import { MongoDBDatabaseConfigurationService } from "../services/mongodb_database_configuration_service.class";

// Database
const DatabaseContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<DatabaseService>(DATABASE.MongoDBDatabaseService).to(
    MongoDBDatabaseService
  );
  bind<DatabaseConfigurationService>(
    DATABASE.MongoDBDatabaseConfigurationService
  ).to(MongoDBDatabaseConfigurationService);
});

export default DatabaseContainer;
