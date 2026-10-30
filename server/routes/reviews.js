const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });
    res.json({ success: true, data: reviews });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// POST new review
router.post('/', async (req, res) => {
  try {
    const { name, role, rating, message } = req.body;
    if (!name || !rating || !message) {
      return res.status(400).json({ success: false, message: 'Name, rating, and message are required.' });
    }
    const review = new Review({ name, role, rating, message });
    const saved = await review.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
