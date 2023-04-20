const router = require("express").Router();
const {
  getAllUnit,
  createUnit,
  deleteUnit,
} = require("../../controllers/unit-controller");

router.route("/").get(getAllUnit);
router.route("/").post(createUnit);
router.route("/:id").delete(deleteUnit);

module.exports = router;
