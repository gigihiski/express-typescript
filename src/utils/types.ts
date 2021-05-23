import DATABASE from "../services/database/containers/types";
import HTTP_CLIENT from "../services/http_client/containers/types";
import MEMORY_CACHE from "../services/memory_cache/containers/types";
import MESSAGE_BROKER from "../services/message_broker/containers/types";
import SECRET_MANAGER from "../services/secret_manager/containers/types";
import TOKEN from "../services/token/containers/types";

const TYPES = {
  DATABASE,
  HTTP_CLIENT,
  MEMORY_CACHE,
  MESSAGE_BROKER,
  SECRET_MANAGER,
  TOKEN,
};

export default TYPES;
