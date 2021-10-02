const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  email: {
    type: String, unique: true, immutable: true, required: [true, 'email required'],
  },
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
