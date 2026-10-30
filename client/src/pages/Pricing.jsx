import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCheck, FiX, FiArrowRight, FiZap, FiMessageCircle, FiChevronDown } from 'react-icons/fi';
import LightningSystem from '../components/ui/LightningSystem';
import TiltCard from '../components/ui/TiltCard';
import './Pricing.css';

const plans = [
  {
    name: 'Starter',
    tagline: 'Perfect for small businesses',
    price: '₹9,999',
    priceNote: 'one-time',
    color: '#00d4aa',
    popular: false,
    features: [
      { text: 'Up to 10 pages', included: true },
      { text: 'Mobile responsive design', included: true },
      { text: 'Contact form', included: true },
      { text: 'WhatsApp button', included: true },
      { text: 'Basic SEO setup', included: true },
      { text: '6 month support', included: true },
      { text: 'Custom domain setup', included: true },
      { text: 'CMS / Admin panel', included: false },
      { text: 'Blog or news section', included: false },
      { text: 'Advanced SEO & analytics', included: false },
      { text: 'Custom animations', included: false },
    ],
  },
  {
    name: 'Growth',
    tagline: 'Most popular for growing businesses',
    price: '₹19,999',
    priceNote: 'one-time',
    color: '#7c3aed',
    popular: true,
    features: [
      { text: 'Up to 15 pages', included: true },
      { text: 'Mobile responsive design', included: true },
      { text: 'Contact form + enquiry system', included: true },
      { text: 'WhatsApp button', included: true },
      { text: 'Advanced SEO setup', included: true },
      { text: '6 months support', included: true },
      { text: 'Custom domain & hosting help', included: true },
      { text: 'CMS / Admin panel', included: true },
      { text: 'Blog or news section', included: true },
      { text: 'Analytics dashboard', included: true },
      { text: 'Custom animations', included: false },
    ],
  },
  {
    name: 'Premium',
    tagline: 'Full-stack web app for ambitious brands',
    price: '₹35,999',
    priceNote: 'starting at',
    color: '#ff6b6b',
    popular: false,
    features: [
      { text: 'Unlimited pages', included: true },
      { text: 'Mobile responsive design', included: true },
      { text: 'Full enquiry / booking system', included: true },
      { text: 'WhatsApp + chat integration', included: true },
      { text: 'Complete SEO + Google Ads setup', included: true },
      { text: '6 months support', included: true },
      { text: 'Custom domain & hosting', included: true },
      { text: 'Custom admin dashboard', included: true },
      { text: 'Blog + portfolio + gallery', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Premium animations & 3D effects', included: true },
    ],
  },
];

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'A Starter website is typically delivered in 5–7 days. A Growth website takes 10–14 days, and Premium projects are scoped individually, usually 3–5 weeks.',
  },
  {
    q: 'What do I need to get started?',
    a: 'Just reach out via WhatsApp or our contact form. We\'ll discuss your requirements, collect your logo/content, and get started immediately after a small advance payment.',
  },
  {
    q: 'Do you offer EMI or installment payment?',
    a: 'Yes! We offer a 50% advance + 50% on delivery payment structure. For Premium projects, we can split into 3 milestones.',
  },
  {
    q: 'Will my website be mobile-friendly?',
    a: 'Absolutely. Every website we build is 100% mobile-responsive and tested across different screen sizes and devices.',
  },
  {
    q: 'Can I update the website myself after it`s built?',
    a: 'Yes, Growth and Premium plans include a CMS panel so you can update content, add blog posts, and upload photos yourself — no coding needed.',
  },
  {
    q: 'Do you provide hosting and domain?',
    a: 'We help you set up hosting and domain. Hosting costs are separate (usually ₹3,000–₹5,000/year for basic, more for cloud hosting). We guide you through the entire process.',
  },
];

const revealVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

function FAQItem({ q, a, idx }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="faq-item"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={revealVariants}
      custom={idx * 0.1}
    >
      <button
        className={`faq-question ${open ? 'open' : ''}`}
        onClick={() => setOpen(o => !o)}
      >
        <span>{q}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="faq-chevron"
        >
          <FiChevronDown />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Pricing() {
  return (
    <div className="pricing-page">
      {/* Header */}
      <section className="page-header">
        <LightningSystem active={true} />
        <div className="container">
          <span className="section-badge section-badge--glow"><FiZap size={12} /> Simple Pricing</span>
          <h1>Transparent <span className="gradient-text">Pricing</span></h1>
          <p>No hidden fees. No surprises. Just honest pricing for quality websites.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="pricing-section section">
        <div className="container">
          <motion.div
            className="pricing-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                variants={revealVariants}
                custom={idx}
                className={`pricing-plan-wrapper ${plan.popular ? 'pricing-plan-wrapper--popular' : ''}`}
              >
                {plan.popular && (
                  <div className="pricing-popular-badge">
                    <FiZap size={12} /> Most Popular
                  </div>
                )}
                <TiltCard className={`pricing-plan ${plan.popular ? 'pricing-plan--popular' : ''}`}>
                  <div className="pricing-plan__top" style={{ '--clr': plan.color }}>
                    <h3 className="pricing-plan__name">{plan.name}</h3>
                    <p className="pricing-plan__tagline">{plan.tagline}</p>
                    <div className="pricing-plan__price">
                      <span className="pricing-plan__amount">{plan.price}</span>
                      <span className="pricing-plan__note">{plan.priceNote}</span>
                    </div>
                  </div>

                  <ul className="pricing-plan__features">
                    {plan.features.map(f => (
                      <li key={f.text} className={`pricing-feature ${f.included ? 'included' : 'excluded'}`}>
                        <span className="pricing-feature__icon" style={{ color: f.included ? plan.color : undefined }}>
                          {f.included ? <FiCheck size={15} /> : <FiX size={15} />}
                        </span>
                        {f.text}
                      </li>
                    ))}
                  </ul>

                  <div className="pricing-plan__actions">
                    <Link
                      to="/contact"
                      className="btn btn-primary btn--glow pricing-plan__btn"
                      style={{ background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)` }}
                    >
                      Get Started <FiArrowRight />
                    </Link>
                    <a
                      href={`https://wa.me/919764781298?text=Hi!%20I'm%20interested%20in%20the%20${encodeURIComponent(plan.name)}%20plan.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline pricing-plan__whatsapp"
                    >
                      <FiMessageCircle size={16} /> WhatsApp Us
                    </a>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* Note */}
          <motion.p
            className="pricing-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            💡 All prices are exclusive of hosting & domain fees (approx. ₹3,000–₹5,000/year). Custom requirements? <Link to="/contact" className="pricing-note__link">Let's talk →</Link>
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section section">
        <div className="container">
          <motion.div
            className="section-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span className="section-badge section-badge--glow" variants={revealVariants}>
              FAQ
            </motion.span>
            <motion.h2 className="section-title" variants={revealVariants} custom={1}>
              Common <span className="gradient-text gradient-text--animated">Questions</span>
            </motion.h2>
          </motion.div>

          <div className="faq-list">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} idx={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pricing-cta section">
        <LightningSystem active={true} />
        <div className="pricing-cta__orb pricing-cta__orb--1" />
        <div className="pricing-cta__orb pricing-cta__orb--2" />
        <motion.div
          className="container section-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.h2 variants={revealVariants}>
            Still Have Questions? <span className="gradient-text gradient-text--animated">Let's Talk!</span>
          </motion.h2>
          <motion.p variants={revealVariants} custom={1} style={{ margin: '1rem auto 2rem', maxWidth: 480 }}>
            Message us on WhatsApp and get a custom quote within minutes.
          </motion.p>
          <motion.div variants={revealVariants} custom={2} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919764781298?text=Hi!%20I'd%20like%20a%20custom%20quote%20for%20my%20website."
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary btn-lg btn--glow"
            >
              <FiMessageCircle /> WhatsApp Us Now
            </a>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Send Enquiry <FiArrowRight />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
