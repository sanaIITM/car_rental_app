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

    // 🔹 Check if fields exist
    if (!car || !startDate || !endDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 🔹 Validate dates BEFORE creating booking
    if (new Date(startDate) >= new Date(endDate)) {
      return res.status(400).json({ message: "Invalid booking dates" });
    }
    if (new Date(startDate) < new Date()) {
      return res.status(400).json({ message: "Start date cannot be in the past" });
    }

    const booking = await Booking.create({
      user: req.user._id,
      car,
      startDate,
      endDate,
      status: "pending"
    });

    res.status(201).json(booking);

  } catch (error) {
    res.status(400).json({ message: "Booking failed" });
  }
});


module.exports = router;
