const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/config");

const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
      len: [10, 15], // Ensures valid phone number length
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  profilePic: {
    type: DataTypes.STRING,
    allowNull: true,  // Allows NULL by default
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true, // Allows NULL values for address
  },
}, {
  tableName: 'users', // Specify the name of the table in the database
  timestamps: true,   // Optional: if you want Sequelize to automatically add `createdAt` and `updatedAt` fields
});

// Export the User model
module.exports = User;
