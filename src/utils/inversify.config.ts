import "reflect-metadata";
import { Container } from "inversify";
import DatabaseContainer from "../services/database/containers/inversify.config";
import HTTPClientContainer from "../services/http_client/containers/inversify.config";
import MemoryCacheContainer from "../services/memory_cache/containers/inversify.config";
import MessageBrokerContainer from "../services/message_broker/containers/inversify.config";
import SecretManagerContainer from "../services/secret_manager/containers/inversify.config";
import TokenContainer from "../services/token/containers/inversify.config";

const container = new Container();
container.load(
  DatabaseContainer,
  HTTPClientContainer,
  MemoryCacheContainer,
  MessageBrokerContainer,
  SecretManagerContainer,
  TokenContainer
);

export default container;
