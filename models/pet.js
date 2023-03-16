// Pet Model

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pet extends Model {}

Pet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type:{
      type: DataTypes.ENUM('Dog', 'Cat', 'Bird', 'Amphibian', 'Reptile', 'Rodent', 'Exotic'),
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('Male', 'Female'),
      allowNull: false,
    },
    special_skills: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    favorite_toy: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    filename: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      }
    },
    owner_rating: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    other_rating: {
      type: DataTypes.INTEGER,
      allowNull:false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pet',
  }
);

module.exports = Pet;