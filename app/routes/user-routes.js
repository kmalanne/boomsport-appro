var user = require('../../app/controllers/user-controller');
var passport = require('passport');

module.exports = function(app) {
  app.route('/login')
  .get(user.renderLogin)
  .post(passport.authenticate('local', {
    successRedirect: '/registrations',
    failureRedirect: '/login',
    failureFlash: true
  }));

  app.get('/logout', user.logout);
};
