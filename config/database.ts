import config from './index';

const env = process.env['NODE_ENV'] || 'development';
const { PG_URI, PG_POOL_MIN, PG_POOL_MAX } = config[env];
const MIGRATIONS_TABLE = 'migrations';

const connection = {};
connection[env] = {
  client: 'pg',
  connection: PG_URI,
  pool: {
    min: PG_POOL_MIN,
    max: PG_POOL_MAX
  },
  migrations: {
    tableName: MIGRATIONS_TABLE
  }
};

module.exports = connection;
