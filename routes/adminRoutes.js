const express = require("express");
const router = express.Router();
const Car = require("../models/Car");
const { protect, adminOnly } = require("../middleware/authMiddleware");

// Check admin
router.get("/check-admin", protect, adminOnly, (req, res) => {
  res.json({ message: "Admin access granted" });
});

// Add Car
router.post("/cars", protect, adminOnly, async (req, res) => {
  const car = await Car.create(req.body);
  res.status(201).json(car);
});

// Update Car
router.put("/cars/:id", protect, adminOnly, async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    res.json(car);
  } catch (error) {
    res.status(400).json({ message: "Invalid Car ID" });
  }
});

// Delete Car
router.delete("/cars/:id", protect, adminOnly, async (req, res) => {
  await Car.findByIdAndDelete(req.params.id);
  res.json({ message: "Car deleted successfully" });
});



const Booking = require("../models/Booking");

// Get all bookings (admin only)
router.get("/bookings", protect, adminOnly, async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("car")
      .populate("user", "name email");

    res.json(bookings);
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch bookings" });
  }
});
// Update booking status
router.put("/bookings/:id", protect, adminOnly, async (req, res) => {
  try {
    const { status } = req.body;

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: "after" }
    );

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json(booking);
  } catch (error) {
    res.status(400).json({ message: "Invalid booking ID" });
  }
});


module.exports = router;