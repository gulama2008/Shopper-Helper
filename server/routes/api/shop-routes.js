const router = require("express").Router();
const {
  getAllShops,
  createShop,
  deleteShop,
} = require("../../controllers/shop-controller");

router.route("/").get(getAllShops);
router.route("/").post(createShop);
router.route("/:id").delete(deleteShop);

module.exports = router;
