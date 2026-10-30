import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiGlobe, FiTrendingUp } from 'react-icons/fi';
import './About.css';
import LightningSystem from '../components/ui/LightningSystem';
import founderImg from '../assets/founder.png';

const values = [
  { icon: FiTarget, title: 'Mission-Driven', desc: 'We solve real problems with technology that makes a measurable difference for our clients.' },
  { icon: FiEye, title: 'Innovation First', desc: 'Always exploring new technologies and approaches to deliver the best solutions.' },
  { icon: FiHeart, title: 'Client-Centric', desc: 'Your success is our success. We build long-term partnerships, not just projects.' },
  { icon: FiAward, title: 'Excellence', desc: 'We hold ourselves to the highest standards of quality, performance, and reliability.' },
];

const milestones = [
  { year: '2025', title: 'Started Freelancing', desc: 'Began freelance web development, building my first websites for clients and learning by doing.' },
  { year: '2025', title: 'Local Business Websites', desc: 'Built websites for local schools and small businesses in Pune, helping them establish their online presence.' },
  { year: '2026', title: 'Founded CodeForge Solutions', desc: 'Founded the agency to help more businesses grow online through modern websites and digital solutions.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
};

export default function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <section className="page-header">
        <LightningSystem active={true} />
        <div className="container">
          <span className="section-badge">Our Story</span>
          <h1>About <span className="gradient-text">CodeForge Solutions</span></h1>
          <p>We are a passionate team of technologists, designers, and strategists building digital excellence since 2026.</p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="container about-story__inner">
          <div className="about-story__content">
            <span className="section-badge">Who We Are</span>
            <h2>Building Digital<br /><span className="gradient-text">Excellence Since 2026</span></h2>
            <p>CodeForge Solutions was founded with a clear vision: to bridge the gap between cutting-edge technology and business value. What started as a small team of passionate developers has grown into a full-service digital agency trusted by startups and enterprises alike.</p>
            <p style={{ marginTop: '1rem' }}>Today, we're a team of specialists in software engineering, cloud architecture, Web development, UI/UX design, and AI — all working together to bring your digital vision to life.</p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Work With Us <FiArrowRight /></Link>
              <Link to="/team" className="btn btn-outline">Meet the Team</Link>
            </div>
          </div>
          <div className="about-story__visual">
            <div className="about-story__img-wrapper">
              <div className="about-story__main-stat">
                <div className="about-story__stats-grid">
                  {[
                    { icon: FiUsers, value: '5', label: 'Team Members' },
                    { icon: FiGlobe, value: '1', label: 'Countries Served' },
                    { icon: FiTrendingUp, value: '12+', label: 'Projects Done' },
                    { icon: FiAward, value: '1+', label: 'Years Active' },
                  ].map(({ icon: Icon, value, label }) => (
                    <div className="about-mini-stat" key={label}>
                      <div className="about-mini-stat__icon"><Icon /></div>
                      <div className="about-mini-stat__value">{value}</div>
                      <div className="about-mini-stat__label">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder 
      <section className="section about-founder">
        <div className="container about-founder__inner">
          <motion.div
            className="about-founder__img-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={founderImg} alt="Omraje — Founder of CodeForge Solutions" className="about-founder__photo" />
            <div className="about-founder__badge">Founder &amp; CEO</div>
          </motion.div>
          <motion.div
            className="about-founder__content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-badge">Meet The Founder</span>
            <h2>Hi, I&apos;m <span className="gradient-text">Omraje</span></h2>
            <p style={{ marginTop: '1rem' }}>
              I&apos;m the founder of CodeForge Solutions. I started this agency with a clear goal — to help schools and local businesses build a strong online presence through modern websites and digital solutions.
            </p>
            <p style={{ marginTop: '1rem' }}>
              What started as freelance projects for local businesses quickly grew into a full agency. Today, we build websites that are fast, beautiful, and actually bring in customers — not just look pretty.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary">Work With Us <FiArrowRight /></Link>
              <a href="https://wa.me/919764781298" target="_blank" rel="noreferrer" className="btn btn-outline">WhatsApp Me</a>
            </div>
          </motion.div>
        </div>
      </section>*/}

      {/* Values */}
      <section className="section section-center about-values">
        <div className="container">
          <span className="section-badge">Our Values</span>
          <h2 className="section-title">What <span className="gradient-text">Drives Us</span></h2>
          <p className="section-subtitle">These principles guide every decision, every line of code, and every client relationship.</p>
          <div className="grid-4">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="value-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <div className="value-card__icon"><Icon size={24} /></div>
                <h4>{title}</h4>
                <p>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section about-timeline">
        <div className="container">
          <div className="section-center" style={{ marginBottom: '3rem' }}>
            <span className="section-badge">Our Journey</span>
            <h2>Milestones That <span className="gradient-text">Define Us</span></h2>
          </div>
          <div className="timeline">
            {milestones.map(({ year, title, desc }, i) => (
              <motion.div
                key={year}
                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="timeline-content">
                  <span className="timeline-year">{year}</span>
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </div>
                <div className="timeline-dot" />
              </motion.div>
            ))}
            <div className="timeline-line" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-center">
        <div className="container">
          <div className="about-cta">
            <h2>Ready to Start Your <span className="gradient-text">Digital Journey?</span></h2>
            <p>Let's discuss how CodeForge Solutions can help you achieve your business goals.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">Get In Touch <FiArrowRight /></Link>
              <Link to="/services" className="btn btn-outline btn-lg">Our Services</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
