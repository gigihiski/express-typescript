import "reflect-metadata";
import { Container } from "inversify";
import TYPES from "./types";

import { DatabaseConfiguration } from "../databases/database_configuration.interface";
import { MongoDBConfiguration } from "../databases/mongodb.configuration";
import { DatabaseClient } from "../databases/database_client.interface";
import { MongoDBClient } from "../databases/mongodb.client";

const container = new Container();

// Database
container
  .bind<DatabaseConfiguration>(TYPES.DatabaseConfiguration)
  .to(MongoDBConfiguration);
container.bind<DatabaseClient>(TYPES.DatabaseClient).to(MongoDBClient);

export default container;
