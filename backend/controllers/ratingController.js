// controllers/ratingController.js

const Rating = require('../models/Rating');

// POST /api/ratings
const createRating = async (req, res) => {
    const { name, destination, rating, review, complaint } = req.body;

    // Validate rating
    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: 'Rating must be between 1 and 5.' });
    }

    try {
        const newRating = new Rating({
            name,
            destination,
            rating,
            review,
            complaint
        });

        await newRating.save();
        res.status(201).json({ message: 'Rating submitted successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = {
    createRating
};
