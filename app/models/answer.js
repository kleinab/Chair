var mongoose = require('mongoose');

module.exports = function(io) {

  var Schema = mongoose.Schema;
  var ObjectId = Schema.ObjectId;

  var answerSchema = new Schema({
    user_id: { type: ObjectId, ref: 'User', required: true },
    question_id: { type: ObjectId, ref: 'Question', required: true },
    answer: { type: String, required: true },
    sharing_id: { type: ObjectId, ref: 'Sharing' }
  })

  // if the model already exists, use the existing model
  return mongoose.models.Answer || mongoose.model('Answer', answerSchema);

};
