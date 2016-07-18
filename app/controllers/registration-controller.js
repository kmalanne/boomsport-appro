var Registration = require('mongoose').model('Registration');
var classController = require('../controllers/class-controller');

exports.createRegistration = function(req, res, next) {
  var result = req.body;
  var name = result.name;
  var email = result.email;
  delete result.name;
  delete result.email;

  var success = true;
  for (var r in result){
    if (result.hasOwnProperty(r)) {
         success = classController.updateAmounts(r, result[r]);
    }
  }

  if (!success) {
    
  }

  var newRegistration = new Registration();
  newRegistration.name = name;
  newRegistration.email = email;
  newRegistration.activities = result;
  newRegistration.save(function(err) {
    if (err) {
      return next(err);
    }
    else {
      res.json(newRegistration);
    }
  });
};

exports.getRegistrations = function(req, res, next) {
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