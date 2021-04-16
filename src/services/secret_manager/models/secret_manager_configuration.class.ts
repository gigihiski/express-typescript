export class SecretManagerConfiguration {
  public app_id?: string;
  public app_secret?: string;
  public app_name?: string;
  public app_description?: string;
  public database_host?: string;
  public database_username?: string;
  public database_password?: string;
  public database_name?: string;
  public database_port?: number;
  public database_method?: string;
  public jwt_secret?: string;
  public jwt_issuer?: string;
  public mt4_manager_demo_host?: string;
  public mt4_manager_demo_port?: number;
  public mt4_manager_demo_password?: string;
  public mt4_manager_live_host?: string;
  public mt4_manager_live_port?: number;
  public mt4_manager_live_password?: string;
  public account_callback_url?: string;
  public ip_address_whitelist?: string;
}
