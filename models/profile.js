const { DataTypes } = require("sequelize");
const sequelize = require("../config/config");

const Hotel = sequelize.define("Hotel", {
  name: { type: DataTypes.STRING, allowNull: false },
  location: { type: DataTypes.STRING, allowNull: false },
  price: { type: DataTypes.FLOAT, allowNull: false },
  rating: { type: DataTypes.INTEGER, allowNull: false },
  rooms: { type: DataTypes.INTEGER, allowNull: false },
  description: { type: DataTypes.JSON, allowNull: false }, // Array of service points
  mainImage: { type: DataTypes.STRING, allowNull: false }, // Main Image URL
  images: { type: DataTypes.JSON, allowNull: true }, // Array of Image URLs
});

module.exports = Hotel;
