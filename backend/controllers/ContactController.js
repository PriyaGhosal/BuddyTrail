const ContactUs = require("../models/ContactUs");
const FeedbackModal = require("../models/Feedback");
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
