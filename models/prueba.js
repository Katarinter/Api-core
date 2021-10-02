const mongoose = require("mongoose");

const { Schema } = mongoose;

const prueba = new Schema({
  status: { type: String },
  message: { type: String },
});