const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  garments: [
    {
      type: String
    }
  ],
  quantities: [
    {
      type: Number
    }
  ],
  pricePerItem: {
    type: Number,
    required: true
  },
  totalAmount: {
    type: Number
  },
  status: {
    type: String,
    enum: ["RECEIVED", "PROCESSING", "READY", "DELIVERED"],
    default: "RECEIVED"
  },
  orderId: {
    type: String,
    unique: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);