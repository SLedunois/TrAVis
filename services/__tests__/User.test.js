const dbConnect = require('../../test/dbConnect');
const Utils = require('../Utils');
const UserService = require('../User');

let userTest;

beforeAll(async () => dbConnect());

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

