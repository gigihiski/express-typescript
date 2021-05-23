import "reflect-metadata";
import { ContainerModule, interfaces } from "inversify";
import MEMORY_CACHE from "./types";
import { RedisService } from "../services/redis_service.class";
import { MemoryCacheService } from "../services/memory_cache_service.interface";

// Memory Cache
const MemoryCacheContainer = new ContainerModule((bind: interfaces.Bind) => {
  bind<MemoryCacheService>(MEMORY_CACHE.RedisMemoryCacheService).to(
    RedisService
  );
});

export default MemoryCacheContainer;
