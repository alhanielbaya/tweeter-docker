class Model {
  constructor() {
    this.dbConnection = require('../database/connect');
    this.mysql = require('mysql');
  }

  connect() {
    this.dbConnection.connect(err => {
      if (err) {
        return console.log(err);
      }

      console.log('Connected to MySQL database');
    });
  }
}

module.exports = Model;
