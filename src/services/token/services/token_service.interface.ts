export interface TokenService {
  setFile(path: string): Promise<void>;
  generate(parameters: any): Promise<any>;
  verify(token: string): Promise<any>;
}
