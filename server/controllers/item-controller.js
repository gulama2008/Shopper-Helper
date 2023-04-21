const { Item} = require("../models");

module.exports = {

  // Get all pre-setup items
  getAllItems(req, res) {
        Item.find()
          .populate("shop")
          .populate("unit")
          .then((items) => res.json(items))
          .catch((err) => res.status(500).json(err));
    },
    
  // Get a pre-setup item
  getSingleItem(req, res) {
      Item.findOne({ _id: req.params.id })
        .select("-__v")
        .populate("shop")
        .populate("unit")
          .then((item) => {
              console.log(123);
              !item
          ? res.status(404).json({ message: "No item with that ID" })
          : res.json(item);}
          
        )
          .catch((err) => {
              console.log(err);
              res.status(500).json(err)
          });
    },
  
  // Create a pre-setup item
  createItem(req, res) {
    Item.create(req.body)
      .then((item) => res.json(item))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    },
  
  // Delete a pre-setup item
  deleteItem(req, res) {
    Item.findOneAndDelete({ _id: req.params.id })
      .then((item) =>
        !item
          ? res.status(404).json({ message: "No item with that ID" })
          : res.status(200).json(item)
      )
      .then(() => res.json({ message: "Item deleted!" }))
      .catch((err) => res.status(500).json(err));
    },
  
  // Update a pre-setup item
  updateItem(req, res) {
    Item.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((item) =>
        !item
          ? res.status(404).json({ message: "No item with this id!" })
          : res.json(item)
      )
      .catch((err) => res.status(500).json(err));
  },
};
