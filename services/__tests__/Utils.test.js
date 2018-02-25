const Utils = require('../Utils');

test('[UtilsService@validPassword] It should valid the password', async () => {
  const password = 'password-test';
  expect(Utils.validPassword(password, Utils.generateHash(password)))
    .toBe(true);
});
