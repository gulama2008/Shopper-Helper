const { Unit } = require("../models");

module.exports = {
  // Get all units
  getAllUnits(req, res) {
    Unit.find()
      .then((units) => res.json(units))
      .catch((err) => res.status(500).json(err));
  },

  // Create a unit
  createUnit(req, res) {
    Unit.create(req.body)
      .then((unit) => res.json(unit))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a unit
  deleteUnit(req, res) {
    Unit.findOneAndDelete({ _id: req.params.id })
      .then((unit) =>
        !unit
          ? res.status(404).json({ message: "No unit with that ID" })
          : res.status(200).json(unit)
      )
      .then(() => res.json({ message: "Unit deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a unit
  updateUnit(req, res) {
    Unit.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((unit) =>
        !unit
          ? res.status(404).json({ message: "No unit with this id!" })
          : res.json(unit)
      )
      .catch((err) => res.status(500).json(err));
  },
};
