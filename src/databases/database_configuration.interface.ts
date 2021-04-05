import { Database } from "./database.model";

export interface DatabaseConfiguration {
  getConfiguration(): Database;
}
