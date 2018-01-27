const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'master'
    },
    port: process.env.PORT || 5001,
  },

  test: {
    root: rootPath,
    app: {
      name: 'master'
    },
    port: process.env.PORT || 3000,
  },

  production: {
    root: rootPath,
    app: {
      name: 'master'
    },
    port: process.env.PORT || 3000,
  }
};

module.exports = config[env];
