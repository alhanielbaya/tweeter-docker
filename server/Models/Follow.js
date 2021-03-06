const Model = require('./_Model');

class Follow extends Model {
  constructor() {
    super();
  }

  followUser(uidToFollow, uid) {
    return new Promise((resolve, reject) => {
      const sql = `insert ignore into follows(uid, follows) VALUES ?`;
      const values = [[uid, uidToFollow]];

      this.dbConnection.query(sql, [values], (error, result) => {
        if (error) throw error;
        resolve(result);
      });
    });
  }

  unFollowUser(uidToUnFollow, uid) {
    return new Promise((resolve, reject) => {
      const sql = `delete from follows where uid = ${uid} AND follows = ${uidToUnFollow}`;

      this.dbConnection.query(sql, (error, result) => {
        if (error) throw error;
        resolve(result);
      });
    });
  }

  queryFollowedUsers(uid) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM follows WHERE uid = ${this.mysql.escape(uid)}`;

      this.dbConnection.query(sql, (error, result) => {
        const newResult = result.map(item => item.follows);
        resolve(newResult);
      });
    });
  }
}

module.exports = new Follow();
