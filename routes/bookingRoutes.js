const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");

// Create a new booking
router.post("/create", bookingController.createBooking);

// Get all bookings
router.get("/", bookingController.getAllBookings);

// Get a single booking by ID
router.get("/:id", bookingController.getBookingById);

// Cancel (delete) a booking by ID
router.delete("/:id", bookingController.cancelBooking);

module.exports = router;
