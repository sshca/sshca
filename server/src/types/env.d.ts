declare namespace NodeJS {
  interface ProcessEnv {
    SSH_KEY: string;
    JWT_PRIVATE: string;
    JWT_PUBLIC: string;
    DOMAIN: string;
    DATABASE_URL: string;
  }
}