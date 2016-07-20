var Registration = require('mongoose').model('Registration');
var classController = require('../controllers/class-controller');

exports.createRegistration = function(req, res, next) {
  req.checkBody("name", "Nimeä ei annettu.").isAscii();
  req.checkBody("email", "Sähköpostiosoite ei ole oikeaa muotoa.").isEmail();

  var errors = req.validationErrors();
  if (errors) {
    var result = classController.getClasses(function(err, result) {
      res.render('index', {classes: result, errors: errors});
    });
    return;
  } else {
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
  }
};

exports.renderRegistrations = function(req, res) {
  var result = getRegistrations(function(err, result) {
    res.render('registrations', {registrations: result});
  });
};

var getRegistrations = function(callback, next) {
  Registration.find({}, function(err, registrations) {
    if (err) {
      return next(err);
    } else {
      callback(err, registrations);
    }
  });
};

var renderRegistrationResult = function(req, res, result) {
  res.render('registration-result', {result: result});
};