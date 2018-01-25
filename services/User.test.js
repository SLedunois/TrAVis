const db = require('../configuration/database');
const configuration = require('../configuration.test.json').mongodb;
const Utils = require('./Utils');
const UserService = require('./User');

const { uri, port, dbName } = configuration;

let userTest;

beforeAll(async () => {
  try {
    await db.connect(`mongodb://${uri}:${port}`, dbName)
  } catch (err) {
    throw err;
  }
});

test('[UserService@getUser] It should return the user test', async () => {
  const user = await UserService.getUser('user-test');
  userTest = user;
  expect(user.username).toBe('user-test');
  expect(Utils.validPassword('password-test', user.password)).toBe(true);
});

test('[UserService@getUserById] It should return user test', async () => {
  const user = await UserService.getUserById(userTest._id);
  expect(user.username).toBe('user-test');
  expect(Utils.validPassword('password-test', user.password)).toBe(true);
});

