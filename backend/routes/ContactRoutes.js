const express = require("express");
const {
  submitContactForm,
  sendEmail,
} = require("../controllers/ContactController.js");

const router = express.Router();

router.post("/", submitContactForm);
router.post("/email", sendEmail);
module.exports = router;
