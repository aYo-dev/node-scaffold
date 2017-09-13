import * as core from 'express-serve-static-core';
import todoController from '../src/controllers/todoController';

export const getRoutes = (app: core.Express) => {
  app.get('/',  (req, res): core.Response => {
    return res.send('<p>Hello World!</p>');
  });

  app.get('/todo/', todoController.getAll);

  app.get('/todo/:guid', todoController.get);

  app.post('/todo/', todoController.create);
};
