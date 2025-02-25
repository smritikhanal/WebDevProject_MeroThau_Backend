const Booking = require('../models/Booking');


// Get all bookings
exports.getAllBookings = async (req, res) => {
    try {
        // Fetch all bookings without any associations
        const bookings = await Booking.findAll();

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get booking by ID
exports.getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new booking
exports.createBooking = async (req, res) => {
    try {
        const { fullName, contactNumber, email, checkInDate, checkOutDate, remarks, paymentMethod, numberOfRooms, numberOfGuests,hotelName } = req.body;

        // Assuming userId is provided through authentication middleware
        // const userId = req.user.id;

        // Validate if the payment method is either Cash or Fonepay
        if (!['Cash', 'Fonepay'].includes(paymentMethod)) {
            return res.status(400).json({ message: 'Invalid payment method. Choose between "Cash" or "Fonepay".' });
        }

        // Assuming the hotelId will be provided in the request body (you can add validation)
       

        // Create the new booking
        const newBooking = await Booking.create({
            fullName,
            contactNumber,
            email,
            checkInDate,
            checkOutDate,
            remarks,
            paymentMethod,
            numberOfRooms,
            numberOfGuests,
            hotelName
            
            
        });

        res.status(201).json({ message: "Booking successful", booking: newBooking });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Cancel a booking
exports.cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);

        if (!booking) {
            return res.status(404).json({ message: "Booking not found" });
        }

        // Delete the booking
        await booking.destroy();
        res.status(200).json({ message: "Booking canceled successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
