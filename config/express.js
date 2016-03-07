var express = require('express'),
bodyParser = require('body-parser'),
passport = require('passport'),
session = require('express-session'),
flash = require('connect-flash');

module.exports = function() {
  var app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(flash());

  app.use(session({
      saveUninitialized: true,
      resave: true,
      secret: 'BoomiCookie'
  }));

  require('../app/routes/index-routes.js')(app);
  require('../app/routes/registration-routes.js')(app);
  require('../app/routes/user-routes.js')(app);

  app.use(express.static('./public'));

  return app;
};
