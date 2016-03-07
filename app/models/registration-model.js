var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var RegistrationSchema = new Schema({
  name: String,
  email: String,
  activity1: String,
  activity2: String,
  activity3: String,
  activity4: String,
});

mongoose.model('Registration', RegistrationSchema);
