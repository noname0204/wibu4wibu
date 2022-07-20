interface Config {
  redis: {
    readonly host: string;
    readonly port: number;
    readonly username: string;
    readonly password: string;
  };
  jwt: {
    readonly accessKey: string;
    readonly refreshKey: string;
  };
  readonly mongoURL: string;
  readonly port: number;
}

export default Config;
