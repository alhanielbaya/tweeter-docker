const Model = require('./_Model');
const moment = require('moment');

class Tweet extends Model {
  constructor() {
    super();
  }

  queryLatestTweets(limit = 10, offset = 0) {
    return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM tweets ORDER BY date desc LIMIT ${limit} OFFSET ${offset}`;

      this.dbConnection.query(sql, (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(result);
      });
    });
  }

  addTweet(profile, post) {
    return new Promise((resolve, reject) => {
      const sql = `INSERT INTO tweets (uid, post, email, name, imageUrl, atSign, date) VALUES ?`;
      const values = [
        [
          profile.uid,
          post,
          profile.email,
          profile.name,
          profile.imageUrl,
          profile.atSign,
          moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
        ]
      ];

      this.dbConnection.query(sql, [values], (err, result) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }
}

module.exports = new Tweet();
