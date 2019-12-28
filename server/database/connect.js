const mysql = require('mysql');

require('dotenv').config();

const connection = mysql.createConnection({
  host: 'ms',
  user: 'root',
  password: 'secret',
  database: 'twitter_clone',
  port: '3306'
});

module.exports = connection;
