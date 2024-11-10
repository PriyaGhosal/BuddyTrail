const ContactUs = require("../models/ContactUs");
const FeedbackModal = require("../models/Feedback");

const SuggestionModal = require("../models/suggestion");


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

exports.newsletter = async (req, resp) => {
  try {
    const { email } = req.body;

    if (!email) {
      return resp.status(400).json({ message: "Email is required" });
    }

    // Configure the transporter with your email credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user:  process.env.EMAIL_USER,
        pass:  process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for Subscribing to BuddyTrail",
      html: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px;">
      <!-- Header -->
     <div style="background:#000000; padding: 20px; text-align: center; border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom: 1px solid #e0e0e0;">
        <img src="cid:headerImage" alt="BuddyTrail Logo" style="width: 100px; margin-bottom: 10px;">
        <h1 style="color:#e3e3e3; margin: 0;">Welcome to Our Newsletter</h1>
      </div>

      <!-- Body Content -->
      <div style="padding: 20px; text-align: center;">
        <h2 style="color: #007BFF;">Thank You for Subscribing!</h2>
        <p>Dear Subscriber,</p>
        <p>We are thrilled to have you with us. Stay tuned for our latest updates, offers, and insights to keep you informed and inspired!</p>

        <!-- Button -->
        <div style="margin-top: 20px;">
          <a href="https://buddytrail.netlify.app/" 
             style="display: inline-block; padding: 12px 25px; background-color: #007BFF; color: white; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5px;">
            Discover More
          </a>
        </div>
      </div>

      <!-- Footer -->
      <div style="background-color: #f5f5f5; padding: 15px; text-align: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
        <p style="font-size: 14px; color: #666;">Best Regards,<br><strong>BuddyTrail Team</strong></p>
        <p style="font-size: 12px; color: #999;">&copy; ${new Date().getFullYear()} BuddyTrail. All rights reserved.</p>
      </div>
    </div>
  `,
      attachments: [
        {
          filename: "buddytrail-logo.png",
          path: "C:/Users/ayush/OneDrive/Desktop/BuddyTrail/backend/controllers/image.png",
          cid: "headerImage",
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    resp.status(200).json({ message: "Newsletter email sent successfully!" });
  } catch (error) {
    console.error("Error sending newsletter:", error);
    resp.status(500).json({ message: "Error sending newsletter" });
  }
};
