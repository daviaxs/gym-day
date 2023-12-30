declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string
    RECAPTCHA_SECRET_KEY: string
    NEXT_PUBLIC_API_BASE_URL: string
  }
}
