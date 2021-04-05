import { Database } from "./database.model";

export interface DatabaseClient {
  connect(database: Database): any;
  disconnect(): any;
}
