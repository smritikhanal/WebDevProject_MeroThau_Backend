const express = require("express");
const upload = require("../middlewares/multerConfig");
const { addHotel, getAllHotels, getHotelById, updateHotel, deleteHotel } = require("../controllers/hotelController");

const router = express.Router();

router.post("/add-hotel", upload.fields([{ name: "mainImage" }, { name: "images" }]), addHotel);
router.get("/get-all-hotels", getAllHotels);
router.get("/get-hotel-by-id/:id", getHotelById);
router.put("/update-hotel/:id", upload.fields([{ name: "mainImage" }, { name: "images" }]), updateHotel);
router.delete("/:id", deleteHotel);

module.exports = router;
