import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import DOMAIN_A from "./types";
import { DomainAController } from "../controllers/domain_a_controller.interface";
import { ExpressDomainAController } from "../controllers/express_domain_a_controller.class";

// Domain A
const DomainAContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<DomainAController>(DOMAIN_A.ExpressDomainAController).to(
    ExpressDomainAController
  );
});

export default DomainAContainer;
