
const ContactUs = require('../models/ContactUs');

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new ContactUs({ name, email, message });
    await newContact.save();
    return res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact form:', error);
    return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
};
