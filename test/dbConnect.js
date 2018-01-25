const db = require('../configuration/database');
const configuration = require('../configuration.test.json').mongodb;

const { uri, port, dbName } = configuration;

module.exports = async () => {
  try {
    await db.connect(`mongodb://${uri}:${port}`, dbName);
  } catch (err) {
    throw err;
  }
};
