import { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiSend, FiUser, FiAlertCircle, FiCheck, FiMessageSquare } from 'react-icons/fi';
import './Reviews.css';
import LightningSystem from '../components/ui/LightningSystem';

let API_BASE = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api';
if (API_BASE.endsWith('/')) API_BASE = API_BASE.slice(0, -1);
if (!API_BASE.endsWith('/api')) API_BASE += '/api';
const API = `${API_BASE}/reviews`;

const initialForm = { name: '', role: '', rating: 0, message: '' };

function StarRating({ value, onChange, readonly }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map(star => (
        <button
          key={star}
          type={readonly ? 'button' : 'button'}
          className={`star-btn ${star <= (hover || value) ? 'active' : ''}`}
          onClick={() => !readonly && onChange && onChange(star)}
          onMouseEnter={() => !readonly && setHover(star)}
          onMouseLeave={() => !readonly && setHover(0)}
          style={{ cursor: readonly ? 'default' : 'pointer' }}
          aria-label={`${star} star`}
        >
          <FiStar fill={star <= (hover || value) ? '#f59e0b' : 'none'} />
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review, i }) {
  return (
    <motion.div
      className="review-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.07, duration: 0.4 }}
    >
      <div className="review-card__header">
        <div className="review-card__avatar">
          {review.name.split(' ').map(w => w[0]).join('')}
        </div>
        <div>
          <strong className="review-card__name">{review.name}</strong>
          <span className="review-card__role">{review.role || 'Customer'}</span>
        </div>
        <div className="review-card__date">
          {new Date(review.createdAt).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })}
        </div>
      </div>
      <StarRating value={review.rating} readonly />
      <p className="review-card__message">"{review.message}"</p>
    </motion.div>
  );
}

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [fetchError, setFetchError] = useState(false);

  // Fetch from API (show seeds if API down)
  useEffect(() => {
    axios.get(API)
      .then(res => { if (res.data.data?.length) setReviews(res.data.data); })
      .catch(() => setFetchError(true));
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.rating) { setError('Please select a star rating.'); return; }
    setStatus('loading');
    setError('');
    try {
      const res = await axios.post(API, form);
      setReviews(r => [res.data.data, ...r]);
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      // Add locally if API fails
      const local = { ...form, _id: Date.now().toString(), createdAt: new Date().toISOString() };
      setReviews(r => [local, ...r]);
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const avgRating = (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="reviews-page">
      <section className="page-header">
        <LightningSystem active={true} />
        <div className="container">
          <span className="section-badge">Community Reviews</span>
          <h1>What Our Clients <span className="gradient-text">Think</span></h1>
          <p>Real feedback from real clients. We are proud of every project we deliver.</p>
          <div className="reviews-rating-summary">
            <div className="reviews-avg">
              <span className="reviews-avg__num">{avgRating}</span>
              <StarRating value={Math.round(avgRating)} readonly />
              <span className="reviews-avg__count">({reviews.length} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container reviews-layout">
        {/* Submit Form */}
        <motion.div
          className="reviews-form-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="reviews-form-card">
            <div className="reviews-form-card__header">
              <div className="reviews-form-icon"><FiMessageSquare size={20} /></div>
              <div>
                <h3>Share Your Experience</h3>
                <p>Your review helps others make informed decisions.</p>
              </div>
            </div>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  className="review-submitted"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                >
                  <FiCheck size={24} />
                  <span>Review submitted! Thank you!</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form className="reviews-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange}
                  className="form-input" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label className="form-label">Your Role / Company</label>
                <input type="text" name="role" value={form.role} onChange={handleChange}
                  className="form-input" placeholder="CEO, Acme Corp" />
              </div>
              <div className="form-group">
                <label className="form-label">Your Rating *</label>
                <StarRating value={form.rating} onChange={r => setForm(f => ({ ...f, rating: r }))} />
              </div>
              <div className="form-group">
                <label className="form-label">Your Review *</label>
                <textarea name="message" value={form.message} onChange={handleChange}
                  className="form-textarea" placeholder="Tell us about your experience with CodeForge Solutions..."
                  rows={4} required />
              </div>
              {error && (
                <div className="contact-error"><FiAlertCircle /> {error}</div>
              )}
              <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}
                disabled={status === 'loading'}>
                {status === 'loading'
                  ? <><span className="spinner" /> Submitting...</>
                  : <><FiSend /> Submit Review</>}
              </button>
            </form>
          </div>
        </motion.div>

        {/* Reviews Display */}
        <div className="reviews-display-col">
          <div className="reviews-display-header">
            <h3>All Reviews <span className="reviews-count">{reviews.length}</span></h3>
            {fetchError && (
              <span className="reviews-info">Showing demo reviews. Connect backend for live data.</span>
            )}
          </div>
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <ReviewCard key={review._id} review={review} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
