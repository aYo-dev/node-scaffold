import config from './index';
import * as knexFactory from 'knex';
import Knex from 'knex';

const env = process.env['NODE_ENV'] || 'development',
  MIGRATIONS_TABLE = 'migrations',
  { DB_CONNECTION, PG_POOL_MIN, PG_POOL_MAX, PG_SEARCH_PATH } = config[env];


export const dbConfig = {
  client: 'pg',
  connection: DB_CONNECTION,
  pool: {
    min: PG_POOL_MIN,
    max: PG_POOL_MAX
  },
  searchPath: PG_SEARCH_PATH,
  migrations: {
    directory: './migrations',
    tableName: MIGRATIONS_TABLE
  },
  seeds: {
    directory: './seeds',
  }
};

const db: Knex = knexFactory(dbConfig);

export default db;
