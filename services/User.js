const { ObjectID } = require('mongodb');
const db = require('../configuration/database');

class UserService {
  /**
   * Returns user based on provided id
   * @param {String} id user id
   */
  static async getUserById(id) {
    try {
      return await db.get().collection('User')
        .findOne({ _id: id });
    } catch (e) {
      console.error('[UserService@getUserById] ' +
      'An error occured when collecting user');
      console.error(e);
    }
  }

  /**
   * Returns user based on provided username
   * @param {String} username user name
   */
  static async getUser(username) {
    try {
      return await db.get().collection('User').findOne({ username });
    } catch (e) {
      console.error('[UserService@getUser] ' +
      'An error occured when collecting user');
      console.error(e);
    }
  }
}

module.exports = UserService;
