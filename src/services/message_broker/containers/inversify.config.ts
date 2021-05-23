import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import MESSAGE_BROKER from "./types";
import { MessageBrokerService } from "../services/message_broker_service.interface";
import { KafkaService } from "../services/kafka_service.class";

// Message Broker
const MessageBrokerContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<MessageBrokerService>(MESSAGE_BROKER.KafkaMessageBrokerService).to(
    KafkaService
  );
});

export default MessageBrokerContainer;
