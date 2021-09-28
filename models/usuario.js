const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  name: { type: String },
  tlf: { type: Number },
  country: { type: String },
  dni: { type: Number },
  type: {
    type: String,
    enum: ['Normal', 'VIP', 'Premium', 'Premium +'],
  },
});
module.exports = mongoose.model('User', user);
