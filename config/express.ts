import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as core from 'express-serve-static-core';

export const init = (app: core.Express): void => {
  app.use(bodyParser.json());
  app.use(cors({credentials: true, origin: true}));
};
