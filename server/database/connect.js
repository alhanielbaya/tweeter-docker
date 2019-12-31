const mysql = require('mysql');

require('dotenv').config();

const options = require('./options');

const connection = mysql.createConnection(options);

module.exports = connection;
