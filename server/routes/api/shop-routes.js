const router = require("express").Router();
const {
  getAllShops,
  createShop,
  deleteShop,
  updateShop,
} = require("../../controllers/shop-controller");

router.route("/").get(getAllShops);
router.route("/").post(createShop);
router.route("/:id").delete(deleteShop);
router.route("/:id").put(updateShop);

module.exports = router;
