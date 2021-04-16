import { MessageResponse } from "../models/message_response.interface";

export interface MessageBrokerService {
  publish(topic: string, message: string): any;
  subscribe(
    topic: string,
    callback: ((payload: MessageResponse) => Promise<void>) | undefined
  ): any;
}
