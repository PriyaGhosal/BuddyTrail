const express = require("express");
const {
  submitContactForm,
  userfeedback,
} = require("../controllers/ContactController.js");

const router = express.Router();

router.post("/", submitContactForm);

router.post("/feedback", userfeedback);
module.exports = router;
