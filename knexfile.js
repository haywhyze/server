module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/workout.db3' }, 
    useNullAsDefault: true, 
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL, 
    useNullAsDefault: true, 
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true, 
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
  },
};
