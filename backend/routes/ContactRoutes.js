const express = require("express");
const {
  submitContactForm,

  userfeedback,

  sendEmail,
  suggestion,
} = require("../controllers/ContactController.js");

const router = express.Router();

router.post("/", submitContactForm);

router.post("/feedback", userfeedback);

router.post("/email", sendEmail);

router.post("/suggestion", suggestion);

module.exports = router;
