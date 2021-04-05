import { MongoClient } from "mongodb";
import { injectable } from "inversify";
import { Database } from "./database.model";
import { DatabaseClient } from "./database_client.interface";
import { AlfredError } from "../utils/errors/alfred.error";

@injectable()
export class MongoDBClient implements DatabaseClient {
  private client?: MongoClient;

  constructor() {}

  connect = async (database: Database): Promise<MongoClient | undefined> => {
    let url;
    if (database.username != "" && database.password != "") {
      url = `mongodb://${database.username}:${database.password}@${database.host}:${database.port}/${database.name}?authSource=admin&authMechanism=${database.authMethod}&useUnifiedTopology=true`;
    } else {
      url = `mongodb://${database.host}:${database.port}?useUnifiedTopology=true`;
    }
    this.client = new MongoClient(url);
    try {
      return await this.client.connect();
    } catch (e) {
      throw new AlfredError(
        "DATABASE_CONNECTION_FAILED",
        "Connection to database failed"
      );
    }
  };

  disconnect = async () => {
    if (this.client != undefined) {
      await this.client.close();
    }
  };
}
