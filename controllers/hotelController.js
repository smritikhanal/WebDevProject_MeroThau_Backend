const Hotel = require("../models/hotel");

// ✅ Add a New Hotel
exports.addHotel = async (req, res) => {
  try {
    const { name, location, price, discountPercent ,rating, rooms } = req.body;
    const description = JSON.parse(req.body.description);
    const baseUrl = `${req.protocol}://${req.get("host")}`; // Get protocol + host
    if(!discountPercent){
        discountPercent=0
    }
    const mainImage = req.files["mainImage"]
      ? `${baseUrl}/uploads/${req.files["mainImage"][0].filename}`
      : null;

    const images = req.files["images"]
      ? req.files["images"].map(file => `${baseUrl}/uploads/${file.filename}`)
      : [];

    const newHotel = await Hotel.create({ name, location, price,discountPercent, rating, rooms, description, mainImage, images });
    res.status(201).json({ message: "Hotel added successfully", hotel: newHotel });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Hotels
exports.getAllHotels = async (req, res) => {
  try {
    const hotels = await Hotel.findAll();
    res.status(200).json(hotels);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Single Hotel
exports.getHotelById = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.status(200).json(hotel);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update a Hotel
exports.updateHotel = async (req, res) => {
    try {
      const hotel = await Hotel.findByPk(req.params.id);
      if (!hotel) return res.status(404).json({ message: "Hotel not found" });
  
      const baseUrl = `${req.protocol}://${req.get("host")}`;
  
      // Create an empty object to store updated fields
      const updatedFields = {};
  
      // Check and update only the fields that are provided
      if (req.body.name) updatedFields.name = req.body.name;
      if (req.body.location) updatedFields.location = req.body.location;
      if (req.body.price) updatedFields.price = req.body.price;
      if (req.body.discountPercent) updatedFields.discountPercent = req.body.discountPercent;
      if (req.body.rating) updatedFields.rating = req.body.rating;
      if (req.body.rooms) updatedFields.rooms = req.body.rooms;
      if (req.body.description) updatedFields.description = JSON.parse(req.body.description);
  
      // Handle image updates
      if (req.files["mainImage"]) {
        updatedFields.mainImage = `${baseUrl}/uploads/${req.files["mainImage"][0].filename}`;
      }
      if (req.files["images"]) {
        updatedFields.images = req.files["images"].map(file => `${baseUrl}/uploads/${file.filename}`);
      }
  
      // Update only the changed fields
      await hotel.update(updatedFields);
  
      res.status(200).json({ message: "Hotel updated successfully", hotel });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

// ✅ Delete a Hotel
exports.deleteHotel = async (req, res) => {
  try {
    const hotel = await Hotel.findByPk(req.params.id);
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });

    await hotel.destroy();
    res.status(200).json({ message: "Hotel deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
