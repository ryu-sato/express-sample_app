'use strict';

var production_config = {};

// Set config for Heroku DB
//   ref. https://github.com/iwazaru/sequelize-heroku/blob/master/index.js
if (process.env.DATABASE_URL) {
  var match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);  // https://regex101.com/r/IcDEk9/1
  production_config = {
    username: match[1],
    password: match[2],
    database: match[5],
    dialect: 'postgres',
    host: match[3],
    port: match[4],
    protocol: 'postgres',
    logging: false,
      dialectOptions: {
          ssl: true
      }
  };
  console.log("Override database config to support Heroku.");
} else {
  production_config = {
    username: "root",
    password: null,
    database: "express_sample_database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  };
}

module.exports = {
  development: {
    username: "root",
    password: null,
    database: "express_sample_database_development",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: "root",
    password: null,
    database: "express_sample_database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  production: production_config,
}
