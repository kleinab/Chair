var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var answerSchema = new Schema({
  userId: { type: ObjectId, ref: 'User', required: true },
  questionId: { type: ObjectId, ref: 'Question', required: true },
  answer: { type: String, required: true },
  sharingId: { type: ObjectId, ref: 'Sharing' }
})

module.exports = mongoose.model('Answer', answerSchema);
