import { injectable } from "inversify";
import { DomainAController } from "./domain_a_controller.interface";

@injectable()
export class ExpressDomainAController implements DomainAController {
  constructor() {}

  public welcome = async (word: string): Promise<any> => {
    return word;
  };
}
