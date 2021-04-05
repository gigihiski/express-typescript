export class AlfredError implements Error {
  name: string;
  message: string;
  stack?: string;

  constructor(name: string, message: string, stack?: string) {
    this.name = name;
    this.message = message;
    this.stack = stack;
  }

  toJSON = (): any => {
    return {
      error: this.name,
      message: this.message,
    };
  };
}
