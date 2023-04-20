const router = require('express').Router();
const listRoutes = require('./list-routes');
const itemRoutes = require('./item-routes');
const unitRoutes = require('./unit-routes');
const shopRoutes = require("./shop-routes");


router.use('/list', listRoutes);
router.use('/item', itemRoutes);
router.use('/unit', unitRoutes);
router.use('/shop', shopRoutes);

module.exports = router;
