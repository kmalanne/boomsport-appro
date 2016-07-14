var classController = require('../controllers/class-controller');

exports.render = function(req, res) {
  var result = classController.getClasses(function(err, result) {
    res.render('index', {classes: result});
  });
};
