const express = require("express");
const {
  submitContactForm,

  userfeedback,

  sendEmail,

} = require("../controllers/ContactController.js");

const router = express.Router();

router.post("/", submitContactForm);


router.post("/feedback", userfeedback);

router.post("/email", sendEmail);

module.exports = router;
