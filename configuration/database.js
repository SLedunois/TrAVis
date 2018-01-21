const { MongoClient } = require('mongodb');

const state = {
  db: null,
};

exports.connect = (url, dbName, done) => {
  if (state.db) return done();

  MongoClient.connect(url, (err, db) => {
    if (err) return done(err);
    state.db = db.db(dbName);
    return done();
  });
};

exports.get = () => state.db;

exports.close = (done) => {
  if (state.db) {
    state.db.close((err) => {
      state.db = null;
      done(err);
    });
  }
} 
