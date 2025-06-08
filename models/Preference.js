const mongoose = require('mongoose');

const PreferenceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  theme: { type: String, default: 'light' },
  layout: { type: String, default: 'default' }
}, { timestamps: true });

module.exports = mongoose.model('Preference', PreferenceSchema);
