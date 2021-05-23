import { MongoClient } from "mongodb";
import { inject, injectable } from "inversify";
import { DatabaseConfiguration } from "../models/database_configuration.interface";
import { AlfredError } from "../../../utils/errors/alfred.error";
import { DatabaseService } from "./database_service.interface";
import DATABASE_TYPES from "../containers/types";

@injectable()
export class MongoDBDatabaseService implements DatabaseService {
  private _client?: MongoClient;
  private _databaseConfiguration: DatabaseConfiguration;

  constructor(
    @inject(DATABASE_TYPES.MongoDBDatabaseConfiguration)
    databaseConfiguration: DatabaseConfiguration
  ) {
    this._databaseConfiguration = databaseConfiguration;
  }

  connect = async (): Promise<MongoClient | undefined> => {
    let url;
    if (
      this._databaseConfiguration.username != "" &&
      this._databaseConfiguration.password != ""
    ) {
      url = `mongodb://${this._databaseConfiguration.username}:${this._databaseConfiguration.password}@${this._databaseConfiguration.host}:${this._databaseConfiguration.port}/${this._databaseConfiguration.name}?authSource=admin&authMechanism=${this._databaseConfiguration.authMethod}&useUnifiedTopology=true`;
    } else {
      url = `mongodb://${this._databaseConfiguration.host}:${this._databaseConfiguration.port}?useUnifiedTopology=true`;
    }
    this._client = new MongoClient(url);
    try {
      return await this._client.connect();
    } catch (e) {
      throw new AlfredError(
        "DATABASE_CONNECTION_FAILED",
        "Connection to database failed"
      );
    }
  };

  disconnect = async () => {
    if (this._client != undefined) {
      await this._client.close();
    }
  };
}
