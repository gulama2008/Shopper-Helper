const router = require("express").Router();
const {
    getAllItems,
    getSingleItem,
  createItem,
  deleteItem,
  updateItem,
} = require("../../controllers/item-controller");

router.route("/").get(getAllItems);
router.route("/:id").get(getSingleItem);
router.route("/").post(createItem);
router.route("/:id").delete(deleteItem);
router.route("/:id").put(updateItem);


module.exports = router;
