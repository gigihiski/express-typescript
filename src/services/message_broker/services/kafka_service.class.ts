import { Kafka, Consumer, Producer } from "kafkajs";
import { MessageBrokerService } from "./message_broker_service.interface";
import { MessageResponse } from "../models/message_response.interface";
import { injectable } from "inversify";

@injectable()
export class KafkaService implements MessageBrokerService {
  private _producer: Producer;
  private _consumer: Consumer;

  constructor(brokers: [string], groupId: string, clientId?: string) {
    const kafka = new Kafka({
      clientId,
      brokers,
    });

    this._producer = kafka.producer();
    this._consumer = kafka.consumer({ groupId });
  }

  publish = async (topic: string, message: string) => {
    await this._producer.connect();
    await this._producer.send({
      topic: topic,
      messages: [{ value: message }],
    });
  };

  subscribe = async (
    topic: string,
    callback: ((payload: MessageResponse) => Promise<void>) | undefined
  ): Promise<Consumer> => {
    await this._consumer.connect();
    await this._consumer.subscribe({ topic: topic, fromBeginning: true });
    await this._consumer.run({
      eachMessage: callback,
    });
    return this._consumer;
  };
}
