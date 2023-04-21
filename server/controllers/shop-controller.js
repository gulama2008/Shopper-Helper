const { Shop } = require("../models");

module.exports = {
  // Get all shops
  getAllShops(req, res) {
    Shop.find()
      .then((shops) => res.json(shops))
      .catch((err) => res.status(500).json(err));
  },
  
  // Create a shop
  createShop(req, res) {
    Shop.create(req.body)
      .then((shop) => res.json(shop))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a shop
  deleteShop(req, res) {
    Shop.findOneAndDelete({ _id: req.params.id })
      .then((shop) =>
        !shop
          ? res.status(404).json({ message: "No shop with that ID" })
          : res.status(200).json(shop)
      )
      .then(() => res.json({ message: "Shop deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a shop
  updateShop(req, res) {
    Shop.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((shop) =>
        !shop
          ? res.status(404).json({ message: "No shop with this id!" })
          : res.json(shop)
      )
      .catch((err) => res.status(500).json(err));
  },
};
