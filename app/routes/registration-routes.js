var registrations = require('../controllers/registration-controller');

module.exports = function(app) {
  app.route('/registrations').post(registrations.create);

  app.route('/registrations').get(registrations.list);
};
