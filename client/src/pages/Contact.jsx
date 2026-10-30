import { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import './Contact.css';
import LightningSystem from '../components/ui/LightningSystem';

const contactInfo = [
  {
    icon: FiMapPin, title: 'Visit Us',
    lines: ['Near DYPCOE&I, Varale', 'Pune, Maharashtra 410507', 'India'],
    color: '#2563eb'
  },
  {
    icon: FiPhone, title: 'Call Us',
    lines: ['+91 9764781298'],
    color: '#7c3aed'
  },
  {
    icon: FiMail, title: 'Email Us',
    lines: ['officialporas@gmail.com', 'omkardeshmukh394@gmail.com'],
    color: '#059669'
  },
  {
    icon: FiClock, title: 'Business Hours',
    lines: ['Monday – Friday: 9AM – 7PM', 'Saturday: 10AM – 4PM', 'Sunday: Remote'],
    color: '#d97706'
  },
];

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };
let API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api';
if (API_BASE.endsWith('/')) API_BASE = API_BASE.slice(0, -1);
if (!API_BASE.endsWith('/api')) API_BASE += '/api';

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [error, setError] = useState('');

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('loading');
    setError('');
    try {
      await axios.post(`${API_BASE}/contact`, form);
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setError('Failed to send message. Please try again or email us directly.');
    }
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <LightningSystem active={true} />
        <div className="container">
          <span className="section-badge">Get In Touch</span>
          <h1>Let's <span className="gradient-text">Talk</span></h1>
          <p>Have a project in mind or just want to say hello? We'd love to hear from you.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map(({ icon: Icon, title, lines, color }) => (
              <motion.div
                key={title}
                className="contact-info-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="contact-info-card__icon" style={{ '--c': color }}>
                  <Icon size={22} />
                </div>
                <h4>{title}</h4>
                {lines.map((line, i) => <p key={i}>{line}</p>)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section contact-form-section">
        <div className="container contact-form-grid">
          {/* Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-header">
              <h2>Send Us a <span className="gradient-text">Message</span></h2>
              <p>Fill out the form and we'll get back to you within 24 hours.</p>
            </div>

            {status === 'success' ? (
              <div className="contact-success">
                <div className="contact-success__icon"><FiCheck size={32} /></div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text" name="name" value={form.name}
                      onChange={handleChange} className="form-input"
                      placeholder="Rahul Sharma" required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email" name="email" value={form.email}
                      onChange={handleChange} className="form-input"
                      placeholder="rahul@company.com" required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel" name="phone" value={form.phone}
                      onChange={handleChange} className="form-input"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className="form-select">
                      <option value="">Select a subject</option>
                      <option>Web Development Project</option>
                      <option>Mobile App Development</option>
                      <option>AI / ML Project</option>
                      <option>UI/UX Design</option>
                      <option>Frontend Development</option>
                      <option>Backend/Database Development</option>
                      <option>Cloud Solutions</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Your Message *</label>
                  <textarea
                    name="message" value={form.message}
                    onChange={handleChange} className="form-textarea"
                    placeholder="Tell us about your project, timeline, and budget..."
                    rows={5} required
                  />
                </div>
                {status === 'error' && (
                  <div className="contact-error">
                    <FiAlertCircle /> {error}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                  disabled={status === 'loading'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {status === 'loading'
                    ? <><span className="spinner" /> Sending...</>
                    : <><FiSend /> Get Free Consultation</>
                  }
                </button>
              </form>
            )}
          </motion.div>

          {/* Map/Visual */}
          <motion.div
            className="contact-map-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-map">
              <div className="contact-map__inner">
                <div className="map-pin-container">
                  <div className="map-pin">
                    <FiMapPin size={28} />
                  </div>
                  <div className="map-ripple" />
                  <div className="map-ripple map-ripple--2" />
                </div>
                <div className="map-info">
                  <h4>CodeForge Solutions HQ</h4>
                  <p>Near DYPCOE&I, Varale, Pune</p>
                  <p style={{ marginTop: '0.5rem' }}>Maharashtra 410507, India</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ marginTop: '1.5rem', display: 'inline-flex' }}
                  >
                    Open in Maps <FiMapPin />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
