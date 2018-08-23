const env = process.env;

export const nodeEnv = env.NODE_ENV || 'development';

export default {
  port: env.PORT || 8080,
  host: env.HOST || '0.0.0.0',
  mongoUri: 'mongodb://localhost:27017/neverLateDB',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};