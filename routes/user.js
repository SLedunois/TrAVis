const express = require('express');
const Utils = require('../services/Utils');
const UserService = require('../services/User');

const router = express.Router();

/* GET home page. */
router.get('/', Utils.isLoggedIn, async (req, res) => {
  const user = await UserService.getUserById(req.session.passport.user);
  res.json(user);
});

module.exports = router;
