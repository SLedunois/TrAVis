const express = require("express");
const Utils = require("../services/Utils");

const router = express.Router();

/* GET home page. */
router.get("/", Utils.isLoggedIn, (req, res) => {
  res.render("index");
});

module.exports = router;
