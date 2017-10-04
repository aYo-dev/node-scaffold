import * as path from 'path';

const DB_NAME = process.env['DB_NAME'] || 'postgres';

export const getRootPath = (rootPath) => {
  return path.normalize(__dirname + rootPath);
};

interface IEnvironmentConfig {
  rootPath: string;
  PG_SEARCH_PATH: string;
  DB_CONNECTION: any;
  PG_POOL_MIN: number;
  PG_POOL_MAX: number;
  host: string;
  port: string | number;
}

interface IConfig {
  production: IEnvironmentConfig;
  staging: IEnvironmentConfig;
  development: IEnvironmentConfig;
  test: IEnvironmentConfig;
}

const production: IEnvironmentConfig = {
  rootPath: getRootPath('/../'),
  PG_SEARCH_PATH: 'knex,public',
  DB_CONNECTION: '',
  PG_POOL_MIN: 0,
  PG_POOL_MAX: 10,
  host: '',
  port: process.env['PORT'] || 3030,
};

const staging: IEnvironmentConfig = {
  rootPath: getRootPath('/../'),
  PG_SEARCH_PATH: 'knex,public',
  DB_CONNECTION: '',
  PG_POOL_MIN: 0,
  PG_POOL_MAX: 2,
  host: '',
  port: process.env['PORT'] || 3030
};

const development: IEnvironmentConfig = {
  rootPath: getRootPath('/../'),
  PG_SEARCH_PATH: 'knex,public',
  DB_CONNECTION: {
    host : 'db',
    user : 'postgres',
    name: 'postgres',
    database : 'postgres',
    post: 5432
  },
  PG_POOL_MIN: 0,
  PG_POOL_MAX: 2,
  host: '0.0.0.0',
  port: process.env['PORT'] || 3030
};

export default {
  production,
  staging,
  development
} as IConfig;
