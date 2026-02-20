const Booking = require("../models/Booking");
const express = require("express");
const router = express.Router();
const Car = require("../models/Car");
const { protect } = require("../middleware/authMiddleware");

// Profile route already exists

// Get all cars (public)
router.get("/cars", async (req, res) => {
  const cars = await Car.find();
  res.json(cars);
});

// Get logged-in user's bookings
router.get("/bookings", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("car")
      .populate("user", "name email");

    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch bookings" });
  }
});

// Create booking (user only)
router.post("/bookings", protect, async (req, res) => {
  try {
    const { car, startDate, endDate } = req.body;

    const booking = await Booking.create({
      user: req.user._id,
      car,
      startDate,
      endDate
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: "Booking failed" });
  }
});
module.exports = router;