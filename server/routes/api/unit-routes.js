const router = require("express").Router();
const {
  getAllUnits,
  createUnit,
  deleteUnit,
  updateUnit,
} = require("../../controllers/unit-controller");

router.route("/").get(getAllUnits);
router.route("/").post(createUnit);
router.route("/:id").delete(deleteUnit);
router.route("/:id").put(updateUnit);

module.exports = router;
