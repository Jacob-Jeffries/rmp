const sequelize = require('../config/connection');
const { User } = require('../models');
const { Pet } = require('../models');
const { Rating } = require('../models');

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

  await Rating.bulkCreate(ratingData);

  process.exit(0);
};

seedDatabase();