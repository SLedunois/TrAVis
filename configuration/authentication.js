const passport = require("passport");
const { Strategy } = require("passport-local");
const UserService = require("../services/User");
const Utils = require("../services/Utils");

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  done(null, await UserService.getUserById(id));
});

passport.use(
  new Strategy(async (username, password, done) => {
    try {
      const user = await UserService.getUser(username);

      if (!user) {
        return done(null, false);
      }

      if (!Utils.validPassword(password, user.password)) {
        return done(null, false);
      }

      return done(null, user);
    } catch (err) {
      done(err);
    }
  })
);

module.exports = passport;
