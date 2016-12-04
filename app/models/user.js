var mongoose = require('mongoose');

module.exports = function(io) {

  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true }
  })

  // if the model already exists, use the existing model
  return mongoose.models.User || mongoose.model('User', userSchema);

};
