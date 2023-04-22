const { Schema, model } = require("mongoose");

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
    bought: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

listSchema
  .virtual("totalPrice")
  // Getter
  .get(function () {
    return this.quantity*this.price;
  })

const List = model("list", listSchema);

module.exports = List;
