import * as bodyParser from 'body-parser';
import * as cors from 'cors';

export const init = (app) => {
  app.use(bodyParser.json());
  app.use(cors({credentials: true, origin: true}));
};
