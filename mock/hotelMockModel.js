const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

// Define Hotel Mock Model
const HotelMock = dbMock.define("Hotel", {
  id: 1,
  name: "Luxury Hotel",
  location: "Downtown City",
  price: 200.5,
  discountPercent: 10,
  rating: 5,
  rooms: 50,
  description: JSON.stringify(["Free Wi-Fi", "Swimming Pool", "Gym"]),
  mainImage: "main-image.jpg",
  images: JSON.stringify(["image1.jpg", "image2.jpg"]),
});

module.exports = HotelMock;
