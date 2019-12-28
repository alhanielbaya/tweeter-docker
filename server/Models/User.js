const Model = require('./_Model');

class User extends Model {
  constructor() {
    super();
  }

  registerUser(email, name, imageUrl, atSign) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO users (email, name, imageUrl, atSign) VALUES ?`;
      const values = [[email, name, imageUrl, atSign]];
      this.dbConnection.query(sql, [values], (err, result) => {
        if (err) throw err;
        resolve(result.affectedRows);
      });
    });
  }

  findUserByEmail(email) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM users WHERE email = ${this.mysql.escape(
        email
      )}`;
      this.dbConnection.query(sql, (err, result) => {
        if (err) throw err;
        resolve(result[0]);
      });
    });
  }

  findNextUserId() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM users`;
      this.dbConnection.query(sql, (err, result) => {
        if (err) throw err;
        const id = (result.length && result[result.length - 1].uid) || 0;

        resolve(id + 1);
      });
    });
  }

  queryUsers() {
    this.dbConnection;
  }
}

module.exports = new User();
