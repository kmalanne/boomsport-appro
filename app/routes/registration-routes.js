var registrations = require('../controllers/registration-controller');

module.exports = function(app) {
  app.route('/registration').post(registrations.createRegistration);
  app.route('/registration').get(registrations.getRegistrations);
};
