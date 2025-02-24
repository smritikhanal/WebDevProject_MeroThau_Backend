const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const { sequelize } = require("./config/config");

// Import routes
const userRoutes = require("./routes/userRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const contactRoutes = require('./routes/contactusRoutes');
// const reviewRoutes = require("./routes/reviewRoutes");

require('dotenv').config();

// Enable CORS for all routes
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Use the routes
app.use("/api/users", userRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/bookings", bookingRoutes);
app.use('/api/contact', contactRoutes);
// app.use("/api/reviews", reviewRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("Hotel Booking API is running");
});

// Sync database and start server
const PORT = process.env.PORT || 3000;
sequelize
  .sync({ alter: true }) // Automatically update database schema
  .then(() => {
    console.log("Database synced successfully.");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });
