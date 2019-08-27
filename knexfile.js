require('dotenv').config(); // load .env variables

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_DEV,
    useNullAsDefault: true, // used to avoid warning on console
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './models/seeds' },
  },
  testing: {
    client: 'pg',
    connection: process.env.DATABASE_TEST,
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './models/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './models/migrations',
      tableName: 'dbmigrations',
    },
    seeds: {
      directory: './models/seeds',
    },
  },
};
