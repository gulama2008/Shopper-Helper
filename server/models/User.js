const { Schema, model } = require("mongoose");

// the shopSchema defines the shape for shop subdocument
const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    // unique: true,
  },
});

// the itemSchema defines the shape for pre-set item subdocument
const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
    },
    unit: String,
    shop: String,
    price: {
      type: Number,
      min: 0,
    },
  }
)
// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    password: {
      type: String,
      required: true,
      minlength: 3,
    },
    items: [itemSchema],
    shops: [shopSchema],
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref:"list"
      }]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Initialize our User model
const User = model("user", userSchema);

module.exports = User;
