var config = require('./config'),
mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db);

  require('../app/models/registration-model');
  require('../app/models/class-model');

  return db;
};
