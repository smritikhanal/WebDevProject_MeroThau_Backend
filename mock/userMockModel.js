const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

// Define User Mock Model
const UserMock = dbMock.define("User", {
  id: 1,
  name: "John Doe",
  contactNumber: "1234567890",
  email: "john@example.com",
  password: "hashedpassword",
  profilePic: "profile.jpg",
  address: "123 Street, City",
}, {
  instanceMethods: {
    validPassword: (password) => password === "hashedpassword", // Mock password validation
  }
});

module.exports = UserMock;
