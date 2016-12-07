var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var answerSchema = new Schema({
  user_id: { type: ObjectId, ref: 'User', required: true },
  question_id: { type: ObjectId, ref: 'Question', required: true },
  answer: { type: String, required: true },
  sharing_id: { type: ObjectId, ref: 'Sharing' }
})

module.exports = mongoose.model('Answer', answerSchema);
