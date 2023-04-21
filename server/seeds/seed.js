const db = require('../config/connection');
const { User,List } = require("../models");

const userData = require('./userData.json');
const listData = require('./listData.json');

db.once('open', async () => {
  // clean database
  // await User.deleteMany({});
  // await List.deleteMany({});

  // bulk create each model
  // const shops = await Shop.insertMany(shopData);
  // const units = await Unit.insertMany(unitData);
  // const users = await User.insertMany(userData);
  const lists = await List.insertMany(listData);
  
  console.log('all done!');
  process.exit(0);
});
