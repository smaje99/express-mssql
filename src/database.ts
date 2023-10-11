import { type Dialect, Sequelize } from 'sequelize';

import { config } from './config';

export const sequelize = new Sequelize(
  config.database.database,
  config.database.user,
  config.database.password,
  {
    host: config.database.host,
    port: config.database.port,
    dialect: config.database.dialect as Dialect,
    dialectOptions: {
      options: { encrypt: false },
    },
  },
);
