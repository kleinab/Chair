var mongoose = require('mongoose');

module.exports = function(io) {

  var Schema = mongoose.Schema;

  var questionSchema = new Schema({
    question: { type: String, required: true }
  })

  // if the model already exists, use the existing model
  return mongoose.models.Question || mongoose.model('Question', questionSchema);

};
