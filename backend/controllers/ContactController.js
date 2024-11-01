const ContactUs = require("../models/ContactUs");
const FeedbackModal = require("../models/Feedback");
const nodemailer = require("nodemailer");

// Submit Contact Form
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

// User Feedback
exports.userfeedback = async (req, res) => {
  try {
    const { Name, Destination, Rating, Review, Complaint } = req.body;

    // Check if all required fields are provided
    if (!Name || !Destination || !Rating || !Review) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const feedbackData = new FeedbackModal({
      name: Name,
      destination: Destination,
      rating: Rating,
      review: Review,
      complaint: Complaint,
    });

    const feedback = await feedbackData.save();
    return res.status(201).json({
      success: true,
      message: "Feedback recorded",
      feedback,
    });
  } catch (error) {
    console.error("Error saving feedback:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Send Email
exports.sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "your-email@gmail.com",
      pass: "your-email-password",
    },
  });

  const mailOptions = {
    from: req.body.Email,
    to: "your-email@gmail.com",
    subject: "BuddyTrail user message",
    text: `
      Name: ${req.body.Name}
      Phone: ${req.body.Phone}
      Email: ${req.body.Email}
      Message: ${req.body.Message}
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error sending email");
    } else {
      console.log("Email sent:", info.response);
      return res.status(200).send("Form data sent successfully");
    }
  });
};
