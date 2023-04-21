const db = require('../config/connection');
// const { Unit, Shop } = require('../models');
const { Item } = require("../models");

const itemData = require('./itemData.json');
// const shopData = require('./shopData.json');
// const unitData = require('./unitData.json');

db.once('open', async () => {
  // clean database
  await Item.deleteMany({});
  // await Shop.deleteMany({});
  // await Unit.deleteMany({});

  // bulk create each model
  // const shops = await Shop.insertMany(shopData);
  // const units = await Unit.insertMany(unitData);
  const items = await Item.insertMany(itemData);

  
  console.log('all done!');
  process.exit(0);
});
