const mongoose = require("mongoose");

const favouritesSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "users",
    },
    content_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "contents",
    }
  },
  {
    timestamps: true,
  }
);


const Favourites = mongoose.model("favourites", favouritesSchema);

module.exports = Favourites;
