const db = require('../config/connection');
const { User,List } = require("../models");

const userData = require('./userData.json');
const listData = require('./listData.json');

db.once('open', async () => {
  // clean database
  await List.deleteMany({});
  await User.deleteMany({});

  // bulk create each model
  const lists = await List.insertMany(listData);
  const users = await User.insertMany(userData);

  for (newList of lists) {
    // randomly add each class to a school
    const tempUser = users[Math.floor(Math.random() * users.length)];
    tempUser.lists.push(newList._id);
    await tempUser.save();
  }

  console.log('all done!');
  process.exit(0);
});
