const MongoDB = require('mongodb').MongoClient;
const { uri, port, db } = require('../configuration.json').mongodb;

const mongo = {
  db: null,
  init: () => {
    MongoDB
      .connect(
        `mongodb://${uri}:${port}/${db}`,
        (err, database) => {
          if (!err) this.db = database;
          else throw err;
        },
      );
  },
};

module.exports = mongo;
