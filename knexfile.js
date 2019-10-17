module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/favorites_tracker',
    useNullAsDefault: true
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + `?ssl=true`,
    migrations: {
      directory: './db/tables.sql'
    },
    useNullAsDefault: true
  }
};
