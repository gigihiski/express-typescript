import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import { SecretManagerRepository } from "../repositories/secret_manager_repository.interface";
import SECRET_MANAGER from "./types";
import { VaultRepository } from "../repositories/vault_repository.class";

// Secret Manager
const SecretManagerContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<SecretManagerRepository>(SECRET_MANAGER.VaultSecretManagerRepository).to(
    VaultRepository
  );
});

export default SecretManagerContainer;
