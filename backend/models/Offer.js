const mongoose = require("mongoose");

const offerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  validTill: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model("Offer", offerSchema);
