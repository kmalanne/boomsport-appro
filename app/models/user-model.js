var mongoose = require('mongoose'),
crypto = require('crypto'),
Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  password: String
});

UserSchema.methods.authenticate = function(password) {
  var md5 = crypto.createHash('md5');
  md5 = md5.update(password).digest('hex');

  return this.password === md5;
};

mongoose.model('User', UserSchema);
