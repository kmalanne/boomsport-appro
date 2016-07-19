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
         classController.updateAmounts(r, result[r]);
    }
  }

  var newRegistration = new Registration();
  newRegistration.name = name;
  newRegistration.email = email;
  newRegistration.activities = result;
  newRegistration.save(function(err) {
    if (err) {
      return renderRegistrationResult(req, res, "Epäonnistui!");
    }
    else {
      return renderRegistrationResult(req, res, "Onnistui!");
      //res.json(newRegistration);
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

var renderRegistrationResult = function(req, res, result) {
  res.render('registrationResult', {result: result});
};