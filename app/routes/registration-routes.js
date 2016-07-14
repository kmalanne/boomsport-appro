var registrations = require('../controllers/registration-controller');

module.exports = function(app) {
  app.route('/registrations').post(registrations.createRegistration);
  app.route('/registrations').get(registrations.getRegistrations);
};
