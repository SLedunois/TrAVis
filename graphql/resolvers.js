const User = require('../services/User');

module.exports = {
  Query: {
    getUser: async (obj, args, context) => {
      const user = await User.getUserById(context.user);
      return user;
    },
  },
};
