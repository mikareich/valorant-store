/* eslint-disable no-unused-vars */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: undefined
      NODE_ENV: "development" | "production"

      SUPABASE_URL: string
      AUTH_SECRET: string

      RIOT_USER_AGENT: string
      RIOT_CLIENT_PLATFORM: string
      RIOT_CLIENT_VERSION: string

      PROXY_PROTOCOL: string
      PROXY_DOMAIN: string
      PROXY_PORT: string
      PROXY_USERNAME: string
      PROXY_PASSWORD: string
    }
  }
}

export {}
