const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  request: { type: Object, required: true },
  response: { type: Object, required: true },
  nickname: { type: String },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('History', historySchema);
