const sequelize = require('../config/connection');
const { User } = require('../models');
const { Pet } = require('./models');
const { Ratings } = require('./models');

const userData = require('./userData.json');
const petData = require('./petData.json');
const ratingData = require('./ratingData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Pet.bulkCreate(petData);

  await Ratings.bulkCreate(ratingData);

  process.exit(0);
};

seedDatabase();