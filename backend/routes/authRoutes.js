const express = require("express");
const rateLimit = require("express-rate-limit");
const {
  signup,
  login,
  logout,
  verifyToken,
} = require("../controllers/authController");

const router = express.Router();

// Set up rate limiter for the login route
const loginRateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 5,
  message: "Too many login attempts. Please try again in 5 minutes.",
  standardHeaders: true,
  legacyHeaders: false,
});

router.post("/signup", signup);
router.post("/login", loginRateLimiter, login); // Apply the limiter here
router.post("/logout", logout);
router.get("/verify", verifyToken);

module.exports = router;
