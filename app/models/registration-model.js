var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var RegistrationSchema = new Schema({
  name: String,
  email: String,
  activities: Object
}, { versionKey: false });

mongoose.model('Registration', RegistrationSchema);
