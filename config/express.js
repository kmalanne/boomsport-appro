var express = require('express'),
bodyParser = require('body-parser'),
validator = require('express-validator'),
_ = require('underscore');

module.exports = function() {
  var app = express();

  app.use(bodyParser.urlencoded({
    extended: true
  }));

  app.use(bodyParser.json());

  app.use(validator());

  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  require('../app/routes/index-routes.js')(app);
  require('../app/routes/registration-routes.js')(app);
  require('../app/routes/class-routes.js')(app);
  
  app.use(express.static('./public'));

  app.locals._ = _;

  return app;
};
