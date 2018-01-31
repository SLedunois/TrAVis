const express = require('express');
const { graphqlExpress } = require('graphql-server-express');
const schema = require('../graphql/schema');
const Utils = require('../services/Utils');

const router = express.Router();

router.post('/', Utils.isLoggedIn, (req, res) => graphqlExpress({
  schema,
  context: { user: req.session.passport.user },
})(req, res));

module.exports = router;
