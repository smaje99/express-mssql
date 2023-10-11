export const config = Object.freeze({
  server: Object.freeze({
    port: process.env.SERVER_PORT ?? 3000,
  }),
  database: Object.freeze({
    host: process.env.DB_HOST ?? '',
    port: parseInt(process.env.DB_PORT ?? '0'),
    database: process.env.DB_DB ?? '',
    user: process.env.DB_UID ?? '',
    password: process.env.DB_PWD ?? '',
    dialect: process.env.DB_DIALECT ?? '',
  }),
});
