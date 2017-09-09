import * as express from 'express';
import * as expressConfig from './config/express';
import * as routesConfig from './config/routes';
import config from './config';

const env = process.env['NODE_ENV'] || 'development',
  { port, host } = config[env],
  app = express();

expressConfig.init(app);
routesConfig.getRoutes(app);

app.listen(port, host, null, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on port ' + port);
});
