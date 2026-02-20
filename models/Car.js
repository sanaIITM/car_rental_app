const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    model: { type: String, required: true },
    category: { type: String },
    pricePerDay: { type: Number, required: true },
    availability: { type: Boolean, default: true },
    location: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Car", carSchema);