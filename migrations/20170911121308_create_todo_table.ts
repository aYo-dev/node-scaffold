import { TODO_TABLE } from '../src/constants/dbTables';
import * as Knex from 'knex';

exports.up = (knex: Knex)  => knex.raw(`
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
  CREATE TABLE ${TODO_TABLE} (
      guid uuid DEFAULT uuid_generate_v4() UNIQUE,
      ts TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
      title varchar NOT NULL,
      content text NOT NULL
    );

    CREATE INDEX id_idx ON ${TODO_TABLE} (guid);
    CREATE INDEX ts_idx ON ${TODO_TABLE} (ts);
    CREATE INDEX title_idx ON ${TODO_TABLE} (title);
`);

exports.down = (knex: Knex) => knex.raw(`
  DROP TABLE ${TODO_TABLE} CASCADE;
`);
