// Ratings Model

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    rank: {
      type: DataTypes.ARRAY(DataTypes.INTEGER),
      allowNull: false,
    },
    pet_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'pet',
        key: 'id',
        unique: false,
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'rating',
  }
);

module.exports = Rating;