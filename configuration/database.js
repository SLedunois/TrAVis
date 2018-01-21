const { MongoClient } = require('mongodb');

const state = {
  db: null,
};

/**
 * Connect database to mongodb
 * @param {String} url url database to connect
 * @param {String} dbName database name to connect
 * @param {Function} done Next middleware function
 */
exports.connect = (url, dbName, done) => {
  if (state.db) return done();

  MongoClient.connect(url, (err, db) => {
    if (err) return done(err);
    state.db = db.db(dbName);
    return done();
  });
};

/**
 * Returns db instance
 */
exports.get = () => state.db;

/**
 * Close database instance
 * @param {Function} done Next middleware function
 */
exports.close = (done) => {
  if (state.db) {
    state.db.close((err) => {
      state.db = null;
      done(err);
    });
  }
};
