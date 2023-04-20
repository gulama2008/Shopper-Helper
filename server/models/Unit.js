const { Schema, model } = require("mongoose");

// Schema to create Unit model
const unitSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// Initialize our Unit model
const Unit = model("unit", unitSchema);

module.exports = Unit;
