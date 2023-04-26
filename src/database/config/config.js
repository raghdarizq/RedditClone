const { Pool } = require('pg');

require('dotenv').config();

const { DB_URL, DATABASE_URL, NODE_ENV } = process.env;

const option = {
  connectionString: NODE_ENV  === 'production' ? DATABASE_URL : DB_URL,
  ssl: NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
};

const connection = new Pool(option);

module.exports = connection;