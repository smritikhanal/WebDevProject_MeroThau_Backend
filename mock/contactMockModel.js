const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

// Define Contact Mock Model
const ContactMock = dbMock.define("Contact", {
  id: 1,
  fullName: "John Doe",
  email: "john@example.com",
  message: "Hello, I need some assistance.",
});

module.exports = ContactMock;
