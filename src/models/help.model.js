const mongoose = require("mongoose");

const deleteJsonEntries = require("../utils/deleteJsonEntries");

const helpSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);


helpSchema.methods.toJSON = function () {
  const help = this;
  const helpObject = help.toObject();
  const configureObject = deleteJsonEntries(helpObject, ["createdAt", "updatedAt", "__v"]);
  return configureObject;
};

const Help = mongoose.model("help_questions", helpSchema);

module.exports = Help;
