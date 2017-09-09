import * as path from 'path';

export const getRootPath = (rootPath) => {
  return path.normalize(__dirname + rootPath);
};

export default {
  production: {
    rootPath: getRootPath('/../'),
    db: '',
    host:'',
    port: process.env.PORT || 3030
  },
  staging: {
    rootPath: getRootPath('/../'),
    db: 'mongodb://localhost/applications_manager',
    host: '',
    port: process.env.PORT || 3030
  },
  development: {
    rootPath: getRootPath('/../'),
    db: 'mongodb://localhost/applications_manager',
    host: '127.0.0.1',
    port: process.env.PORT || 3030
  }
};
