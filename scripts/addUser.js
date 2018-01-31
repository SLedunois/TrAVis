const db = require('../configuration/database');
const Utils = require('../services/Utils');
const configuration = require('../configuration.json').mongodb;

if (process.argv.length <= 2) {
  console.error('Argument unvailable. Please restart with ' +
  '`node addUser <username> <password>`');
  process.exit();
}

const username = process.argv[2];
const password = process.argv[3];

const { uri, port, dbName } = configuration;

db.connect(`mongodb://${uri}:${port}`, dbName)
  .then(() => {
    db.get().collection('User').insert({
      username,
      password: Utils.generateHash(password),
    }).then((res, userErr) => {
      if (userErr) throw new Error('[Script@addUser] Unable to create user');
      process.exit();
    });
  })
  .catch((err) => {
    console.error(err);
    throw new Error('[Script@addUser] Unable to connect to MongoDB');
  });
