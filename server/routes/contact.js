const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const Contact = require('../models/Contact');

const EMAIL_HOST = process.env.EMAIL_HOST;
const EMAIL_PORT = Number(process.env.EMAIL_PORT) || 587;
const EMAIL_SECURE = process.env.EMAIL_SECURE === 'true';
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const CONTACT_RECEIVER_EMAIL = process.env.CONTACT_RECEIVER_EMAIL || EMAIL_USER;

const emailConfigured = EMAIL_HOST && EMAIL_PORT && EMAIL_USER && EMAIL_PASS && CONTACT_RECEIVER_EMAIL;

const transporter = emailConfigured ? nodemailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_SECURE,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
}) : null;

// POST contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    if (!emailConfigured) {
      console.error('❌ Email is not configured. Set EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASS, and CONTACT_RECEIVER_EMAIL.');
      return res.status(500).json({ success: false, message: 'Email delivery is not configured on the server.' });
    }

    const contact = new Contact({ name, email, phone, subject, message });
    const saved = await contact.save();

    const mailOptions = {
      from: `${name} <${EMAIL_USER}>`,
      to: CONTACT_RECEIVER_EMAIL,
      subject: `New contact form submission: ${subject || 'No subject'}`,
      replyTo: email,
      text: `You have received a new contact request from ${name}.

Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Subject: ${subject || 'N/A'}
Message:
${message}

Submitted at: ${new Date().toLocaleString()}
`,
      html: `<h2>New Contact Form Submission</h2>
<ul>
  <li><strong>Name:</strong> ${name}</li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
  <li><strong>Subject:</strong> ${subject || 'N/A'}</li>
</ul>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
<p><em>Submitted at: ${new Date().toLocaleString()}</em></p>`,
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Contact email sent for:', name, '-', email);

    res.status(201).json({ success: true, message: 'Message received! We will get back to you soon.', data: saved });
  } catch (err) {
    console.error('Contact submission error:', err);
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET all contact messages (admin)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, data: contacts });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
