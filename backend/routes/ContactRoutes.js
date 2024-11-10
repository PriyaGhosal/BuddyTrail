const express = require("express");
const {
  submitContactForm,

  userfeedback,

  sendEmail,
  newsletter,
  suggestion,
} = require("../controllers/ContactController.js");

const router = express.Router();

router.post("/", submitContactForm);

router.post("/feedback", userfeedback);

router.post("/email", sendEmail);

router.post("/suggestion", suggestion);

router.post("/newsletter", newsletter);
module.exports = router;
