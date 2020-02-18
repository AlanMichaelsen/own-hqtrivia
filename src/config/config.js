module.exports = {
  development: {
    dialect: 'sqlite',
    storage: './db.development.sqlite'
  },
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  },
  production: {
    use_env_variable: 'DB_CONNECTION_STRING',
    dialect: 'postgres',
    logging: false,
    ssl: true,
    dialectOptions: {
      ssl: true
    }
  }
}
