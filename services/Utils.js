const bcrypt = require('bcrypt-nodejs');

class Utils {
  /**
   * Generate password hash
   * @param {String} password password to hash
   */
  static generateHash(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }

  /**
   * Compare passwords. Return if passwords are equals
   * @param {String} password1 password 1
   * @param {String} password2 password 2
   */
  static validPassword(password1, password2) {
    return bcrypt.compareSync(password1, password2);
  }

  /**
   * Returns if current user is logged in. If not, redirect to authentification page
   * @param {HttpRequest} req Http request
   * @param {HttpResponse} res Http response
   * @param {Function} next Next function middleware
   */
  static isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
      return res.redirect('/auth');
    }

    return next();
  }
}

module.exports = Utils;
