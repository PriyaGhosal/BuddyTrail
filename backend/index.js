// Import required modules
const express = require('express');
const connectDB = require('./config/db');  // Database connection
const authRoutes = require('./routes/authRoutes');  // Authentication routes
const cookieParser = require('cookie-parser');  // Middleware for parsing cookies
const config = require('./config/config');  // Config file for environment variables
const cors = require('cors');  // Middleware for Cross-Origin Resource Sharing

// Initialize express app
const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration
app.use(cors({
    origin: 'http://your-frontend-domain.com',  // Replace with your frontend URL
    credentials: true  // Allow credentials (cookies) to be sent with requests
}));

// Middleware
app.use(express.json());  // Parse JSON bodies
app.use(cookieParser());  // Enable cookie parsing

// API routes
app.use('/api/auth', authRoutes);  // Route for authentication endpoints

// Server listening on configured port
const PORT = config.port || 5000;  // Use config for port, default to 5000 if undefined
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
