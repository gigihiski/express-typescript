export interface MemoryCacheService {
  write(key: string, value: string): Promise<any>;
  read(key: string): Promise<any>;
  connectionCheck(): Promise<any>;
}
