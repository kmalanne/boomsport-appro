var Registration = require('mongoose').model('Registration');

exports.create = function(req, res, next) {
  console.log(req.body);
  var registration = new Registration(req.body);
  registration.save(function(err) {
    if (err) {
      return next(err);
    }
    else {
      res.json(registration);
    }
  });
};

exports.list = function(req, res, next) {
  Registration.find({}, function(err, registrations) {
    if (err) {
      return next(err);
    }
    else {
      res.json(registrations);
    }
  });
};

exports.renderRegistrations = function(req, res) {
  res.render('registrations')
};