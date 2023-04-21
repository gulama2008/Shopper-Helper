const { Schema, model } = require("mongoose");

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
    unit: {
      type: Schema.Types.ObjectId,
      ref: "unit",
    },
    shop: {
      type: Schema.Types.ObjectId,
      ref: "shop",
    },
    price: {
      type: Number,
      min: 0,
    },
    bought: {
      type: Boolean,
      default: false,
    },
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Item = model("item", itemSchema);

module.exports = Item;
