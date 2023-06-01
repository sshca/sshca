declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      JWT_PRIVATE: string;
      JWT_PUBLIC: string;
      SSH_KEY: string;
      DOMAIN: string;
      HOST_VALIDITY_SECONDS: string;
      CLIENT_VALIDITY_SECONDS: string;
    }
  }
}

export {};
