var User = require('mongoose').model('User'),
    passport = require('passport');

exports.renderLogin = function(req, res, next) {
    if (!req.user) {
        res.render('login', {
            messages: req.flash('error') || req.flash('info')
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};
