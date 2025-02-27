// mock/bookingMockModel.js
const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

const BookingMock = dbMock.define("Booking", {
  id: 1,
  checkInDate: new Date(),
  checkOutDate: new Date(),
  fullName: "John Doe",
  contactNumber: "1234567890",
  email: "john@example.com",
  paymentMethod: "Cash",
  numberOfRooms: 1,
  numberOfGuests: 2,
  hotelName: "Grand Hotel",
  createdAt: new Date(),
  updatedAt: new Date(),
});

module.exports = BookingMock;
