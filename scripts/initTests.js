const db = require('../configuration/database');
const configuration = require('../configuration.test.json').mongodb;
const Utils = require('../services/Utils');

const { uri, port, dbName } = configuration;

async function addUser(username, password) {
  try {
    await db.get().collection('User').insert({
      username,
      password: Utils.generateHash(password),
    });
  } catch (e) {
    throw new Error('[Script@initTests:addUser] Unable to create user');
  }
}

db.connect(`mongodb://${uri}:${port}`, dbName).then(async (err) => {
  if (err) {
    console.error(err);
    throw new Error('[Script@initTests] Unable to connect to MongoDB');
  }

  await addUser('user-test', 'password-test');
  process.exit();
});
