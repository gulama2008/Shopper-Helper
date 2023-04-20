const router = require("express").Router();
const {
  getAllItems,
  createItem,
  deleteItem, 
} = require("../../controllers/item-controller");

router.route("/").get(getAllItems);
router.route("/").post(createItem);
router.route("/:id").delete(deleteItem);


module.exports = router;
