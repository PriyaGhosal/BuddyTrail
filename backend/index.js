const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const config = require('./config/config'); // Import config
const cors = require('cors'); // Import CORS

const app = express();
connectDB();

// CORS configuration
app.use(cors({
    origin: 'http://your-frontend-domain.com', // Replace with your frontend URL
    credentials: true, // Allow credentials (cookies) to be sent
}));

app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);

const PORT = config.port; // Use config for port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});