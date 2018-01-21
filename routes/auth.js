const router = require('express').Router();
const passport = require('../configuration/authentication');

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/');
  }
  res.render('login');
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/auth',
  failureFlash: true,
}));

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/auth');
});

module.exports = router;
