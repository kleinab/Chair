var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  firstName: {type: String, required: true},
  lastName: {type: String}
});

module.exports = mongoose.model('User', userSchema);
