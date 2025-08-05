const mongoose = require("mongoose");

const pricingSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  features: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model("Pricing", pricingSchema);
