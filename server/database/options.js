require('dotenv').config();

module.exports = {
  host: 'ms',
  user: 'root',
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: 'twitter_clone',
  port: '3306'
};
