const { Schema, model } = require("mongoose");

const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Shop = model("shop", shopSchema);

module.exports = Shop;
