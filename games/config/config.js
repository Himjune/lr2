const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'games'
    },
    port: process.env.PORT || 5003,
    db: {
			username: "postgres",
			password: "1",
			database: "gaikai",
			host: "127.0.0.1",
			port: "5432",
			dialect: "postgres"
	  }
  },

  test: {
    root: rootPath,
    app: {
      name: 'games'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/games-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'games'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/games-production'
  }
};

module.exports = config[env];
