const router = require("express").Router();
const {
  getAllLists,
  createLists,
  getList
} = require("../../controllers/list-controller");

router.route("/").get(getAllLists);
router.route("/").post(createLists);
router.route("/:id").get(getList);

module.exports = router;
