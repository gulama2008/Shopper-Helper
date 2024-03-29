const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      min: 0,
      default: 0,
      required: true,
    },
    unit: String,
    shop: String,
    price: {
      type: Number,
      min: 0,
      default: 0,
    },
    bought: {
      type: Boolean,
      default: false,
    },
    date: {
      type: String,
      default: Date.now,
      // get: (timestamp) => dateFormat(timestamp),
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
    return (this.quantity*this.price).toFixed(2);
  })

const List = model("list", listSchema);

module.exports = List;
