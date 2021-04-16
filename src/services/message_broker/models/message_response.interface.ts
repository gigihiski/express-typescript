import { KafkaMessage } from "kafkajs";

export interface MessageResponse {
  topic: string;
  partition: number;
  message: KafkaMessage;
}
