const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// Configure Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.ADMIN_EMAIL,
      pass: process.env.ADMIN_EMAIL_PASSWORD,
    },
});

// Subscription handler
exports.subscribe = async (req, res) => {
    const { email } = req.body;

    // Define the confirmation email content
    const mailOptions = {
        from: "BuddyTrail",
        to: email,
        subject: 'Thank you for subscribing BuddyTrail!',
        text: `Thank you for subscribing to our newsletter! We'll keep you updated with the latest news and offers.`,
    };

    try {
        // Send the confirmation email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Subscription successful! A confirmation email has been sent.' });
    } catch (error) {
        console.error('Error sending confirmation email:', error);
        res.status(500).json({ message: 'Failed to send confirmation email. Please try again later.' });
    }
};
