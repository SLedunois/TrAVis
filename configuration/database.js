const { MongoClient } = require('mongodb');

const state = {
  db: null,
};

/**
 * Connect database to mongodb
 * @param {String} url url database to connect
 * @param {String} dbName database name to connect
 */
exports.connect = async (url, dbName) => {
  if (!state.db) {
    try {
      const db = await MongoClient.connect(url);
      state.db = db.db(dbName);
    } catch (err) {
      console.error(err);
      process.exit();
    }
  }
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
