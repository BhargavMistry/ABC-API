const mongoose = require("mongoose");

const deleteJsonEntries = require("../utils/deleteJsonEntries");

const cartSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    content_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contents",
    },
    license_type: {
      type: mongoose.Schema.Types.ObjectId,
      //   required: true,
      ref: "license_types",
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);


const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;
