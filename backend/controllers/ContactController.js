const ContactUs = require("../models/ContactUs");

const FeedbackModal = require("../models/Feedback");

const SuggestionModal = require("../models/suggestion");

const nodemailer = require("nodemailer");

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new ContactUs({ name, email, message });
    await newContact.save();
    return res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    return res
      .status(500)
      .json({ message: "Failed to send message. Please try again later." });
  }
};

exports.userfeedback = async (req, res) => {
  try {
    const { Name, Destination, Rating, Review, Complaint } = req.body;
    if (!Name || !Destination || !Rating || !Review) {
      return res.status(400).send({
        message: "All fields are required",
      });
    }
    const response = new FeedbackModal({
      name: Name,
      destination: Destination,
      rating: Rating,
      review: Review,
      complaint: Complaint,
    });

    const feedback = await response.save();
    if (response) {
      res.status(201).send({
        success: true,
        message: "feedback recorded ",
        feedback,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "internal server error ",
    });
  }
};

exports.sendEmail = async (req, resp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your email id",
      pass: "your password",
    },
  });

  const mailOptions = {
    from: req.body.Email,
    to: "your email id",
    subject: "BuddyTrail user message",
    text: `
      Name: ${req.body.Name}
      Phone:${req.body.Phone}
      Email: ${req.body.Email}
      Message: ${req.body.Message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email: " + error);
      resp.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      resp.status(200).send("Form data sent successfully");
    }
  });
};

exports.suggestion = async (req, resp) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return resp.status(400).send({
        success: false,
        message: "all fields are required",
      });
    }

    const suggestion = await new SuggestionModal({
      name: name,
      email: email,
      message: message,
    }).save();

    if (suggestion) {
      return resp.status(201).send({
        success: true,
        message: "suggestion recorded",
      });
    }
  } catch (error) {
    return resp.status(500).send({
      success: false,
      message: "intenral server error",
    });
  }
};
