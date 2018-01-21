const configuration = require('./configuration.json');
const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const db = require('./configuration/database');
const session = require('express-session');
const flash = require('connect-flash');

const app = express();

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret: configuration.session.secret,
  resave: false,
  saveUninitialized: false,
}));

const passport = require('./configuration/authentication');

app.use(passport.initialize());
app.use(flash());
app.use(passport.session());

const index = require('./routes/index');
const auth = require('./routes/auth');

app.use('/', index);
app.use('/auth', auth);

// catch 404 and forward to error handler
/** app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});* */

// error handler
/** app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});* */

const { uri, port, dbName } = configuration.mongodb;

db.connect(`mongodb://${uri}:${port}`, dbName, (err) => {
  if (err) {
    throw new Error('Unable to connect to MongoDB');
  }
});

module.exports = app;
