const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/config");
const User = require("./user");


const Booking = sequelize.define("Booking", {
  checkInDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  checkOutDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true, // Ensures it's a valid email format
    },
  },
  remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  paymentMethod: {
    type: DataTypes.ENUM('Cash', 'Fonepay'),
    allowNull: false,
  },
  numberOfRooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Default to 1 room if not specified
  },
  numberOfGuests: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1, // Default to 1 guest if not specified
  },
  hotelName:{
    type: DataTypes.STRING,
    allowNull:false
  }
}, {
  tableName: 'bookings',
  timestamps: true,
});

// Associations (if not defined elsewhere)
// A Booking belongs to a User and a Hotel
// Booking.belongsTo(User, { foreignKey: "userId", as: "user" });
// Booking.belongsTo(Hotel, { foreignKey: "hotelId", as: "hotel" });

module.exports = Booking;
