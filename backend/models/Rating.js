// models/Rating.js

const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    name: { type: String, required: true },
    destination: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }, // Ensures rating is between 1 and 5
    review: { type: String, required: true },
    complaint: { type: String, default: '' }, // Optional field
    createdAt: { type: Date, default: Date.now } // Timestamp for when the review was created
});

const Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
