const { Pool } = require("pg")

module.exports = new Pool({
  user: 'postgres',
  password: 'Sashi1234',
  host: 'localhost',
  port: '5432',
  database: 'gymmanager'
})