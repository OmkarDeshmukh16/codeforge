import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  FiArrowRight, FiMonitor, FiSmartphone, FiCode, FiBarChart2, FiLayers,
  FiCheck, FiStar, FiChevronLeft, FiChevronRight, FiPlay, FiZap, FiExternalLink, FiTrendingUp,
  FiSearch, FiShare2
} from 'react-icons/fi';
import './Home.css';
import LightningSystem, { ScrollLightning } from '../components/ui/LightningSystem';
import TiltCard from '../components/ui/TiltCard';
import Counter from '../components/ui/Counter';
import FloatingParticles from '../components/ui/FloatingParticles';
import WordRotate from '../components/ui/WordRotate';
import MagneticBtn from '../components/ui/MagneticBtn';
import rainbowImg from '../assets/rainbow_preschool.png';
import gurukulImg from '../assets/gurukul_preschool.png';
import oilShopImg from '../assets/oil_shop.png';

const services = [
  { icon: FiCode, title: 'Website Development', desc: 'Stunning, performant web apps built with modern frameworks.', badge: 'Most Popular', color: '#6c63ff' },
  { icon: FiSearch, title: 'SEO Optimization', desc: 'Optimize your website to rank higher on Google and attract more local customers.', badge: '', color: '#00d4aa' },
  { icon: FiShare2, title: 'Social Media Handling', desc: 'Engage your audience and grow your brand presence across all social platforms.', badge: 'Trending', color: '#ff6b6b' },
];

const stats = [
  { value: '10+', label: 'Projects Delivered', icon: '🚀' },
  { value: '10+', label: 'Happy Clients', icon: '❤️' },
  { value: '2+', label: 'Years Experience', icon: '⚡' },
  { value: '100%', label: 'Client Satisfaction', icon: '🌟' },
];

const testimonials = [
  {
    name: 'Ganesh Sakhre Patil', role: 'Owner, Rudreshwar Tel Udyog, Latur',
    text: 'CodeForge Solutions transformed our digital presence completely. Their team delivered an exceptional product that exceeded all expectations. Highly professional and innovative!',
    rating: 5, avatar: 'RT', color: '#6c63ff'
  },
  {
    name: 'Rupali Murhe', role: 'Founder, Rainbow PreSchool & Bunnyland preschool Talegaon Dabhade',
    text: 'Working with CodeForge was a game-changer for our preschools. They understood our vision perfectly and built a scalable platform that grew with our business.',
    rating: 5, avatar: 'LS', color: '#00d4aa'
  },
];

const whyUs = [
  'Fast Delivery',
  'Affordable Pricing',
  'Mobile Responsive',
  'SEO Friendly',
  'WhatsApp Support',
  'Post-Launch Support',
];

/* ─── SECTION REVEAL ─── */
const revealVariants = {
  hidden: { opacity: 0, y: 60, filter: 'blur(8px)' },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }
  }),
};

/* ─── MAIN HOME ─── */
export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const heroParallaxY = useTransform(scrollYProgress, [0, 0.3], [0, -120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const prev = () => setActiveSlide(s => (s - 1 + testimonials.length) % testimonials.length);
  const next = () => setActiveSlide(s => (s + 1) % testimonials.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home" ref={containerRef}>
      <ScrollLightning scrollYProgress={scrollYProgress} />

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="hero hero--ultra">
        {/* Background orbs */}
        <div className="hero__orbs">
          <motion.div className="hero__orb hero__orb--1"
            animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div className="hero__orb hero__orb--2"
            animate={{ scale: [1, 1.2, 1], x: [0, -25, 0], y: [0, 30, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />
          <motion.div className="hero__orb hero__orb--3"
            animate={{ scale: [1, 1.1, 1], x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          {/* Extra electric orb */}
          <motion.div className="hero__orb hero__orb--electric"
            animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Grid overlay */}
        <div className="hero__grid-overlay" />

        <FloatingParticles />
        <LightningSystem active={true} />

        <motion.div
          className="container hero__inner"
          style={{ y: heroParallaxY, opacity: heroOpacity }}
        >
          {/* Left content */}
          <div className="hero__content">
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              initial="hidden"
              animate={heroLoaded ? 'visible' : 'hidden'}
            >
              <motion.div variants={revealVariants}>
                <span className="section-badge section-badge--glow">
                  <FiZap size={12} /> Welcome to the Future of Tech
                </span>
              </motion.div>

              <motion.h1 className="hero__title" variants={revealVariants} custom={1}>
                We Build{' '}
                <span className="gradient-text gradient-text--animated">
                  <WordRotate words={['Websites', 'Web Apps', 'Mobile Apps', 'Online Stores', 'Digital Solutions']} />
                </span>
                <br />
                <span className="hero__title-sub">That Help Businesses Get More Customers</span>
              </motion.h1>

              <motion.p className="hero__subtitle" variants={revealVariants} custom={2}>
                We build fast, beautiful, mobile-friendly websites for schools, shops, and local businesses across India — so you get more enquiries, more calls, and more customers.
              </motion.p>

              <motion.div className="hero__actions" variants={revealVariants} custom={3}>
                <MagneticBtn to="/contact" className="btn btn-primary btn-lg btn--glow">
                  Start a Project <FiArrowRight />
                </MagneticBtn>
                <MagneticBtn to="/services" className="btn btn-outline hero__outline-btn btn-lg">
                  <FiPlay size={16} /> Explore Services
                </MagneticBtn>
              </motion.div>

              <motion.div className="hero__trust" variants={revealVariants} custom={4}>
                {['React', 'Node.js', 'AWS', 'MongoDB', 'Flutter'].map((t, i) => (
                  <motion.span
                    key={t} className="trust-tag"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.08, type: 'spring', stiffness: 400 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Right visual – 3D card */}
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, x: 80, rotateY: -20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="hero__3d-card">
              <div className="hero__3d-card-inner">
                {/* Animated rings */}
                <div className="card__rings">
                  {[1, 2, 3].map(i => (
                    <motion.div
                      key={i}
                      className={`card__ring card__ring--${i}`}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360, scale: [1, 1.05, 1] }}
                      transition={{ duration: 8 + i * 3, repeat: Infinity, ease: 'linear' }}
                    />
                  ))}
                </div>

                <div className="code-window code-window--3d">
                  <div className="code-window__bar">
                    <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                    <span className="code-window__title">codeforge-app.js</span>
                  </div>
                  <div className="code-window__body">
                    {[
                      <><span className="kw">const</span> app = <span className="fn">createApp</span>({'{'}</>,
                      <>&nbsp;&nbsp;name: <span className="str">"CodeForge"</span>,</>,
                      <>&nbsp;&nbsp;version: <span className="str">"2.0.0"</span>,</>,
                      <>&nbsp;&nbsp;services: [<span className="str">"Web"</span>, <span className="str">"Cloud"</span>]</>,
                      <>{'}'});</>,
                      <>&nbsp;</>,
                      <>app.<span className="fn">launch</span>(); <span className="comment">// 🚀</span></>,
                    ].map((line, i) => (
                      <motion.div
                        key={i}
                        className="code-line"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                      >
                        {line}
                      </motion.div>
                    ))}
                  </div>
                  {/* Cursor blink */}
                  <motion.div
                    className="code-cursor"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </div>

                <div className="hero__floating-badges">
                  {[
                    { cls: 'floating-badge--1', icon: <FiCheck className="check" />, text: 'On-time Delivery', delay: 1.2 },
                    { cls: 'floating-badge--2', icon: '⭐', text: '5.0 Rating', delay: 1.4 },
                    { cls: 'floating-badge--3', icon: '🔒', text: 'Secure & Scalable', delay: 1.6 },
                  ].map(({ cls, icon, text, delay }) => (
                    <motion.div
                      key={text}
                      className={`floating-badge ${cls}`}
                      initial={{ opacity: 0, scale: 0, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ delay, type: 'spring', stiffness: 300 }}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                    >
                      {icon} {text}
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>

        <div className="hero__wave">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg">
            <path fill="#f8fafc" d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>
      </section>

      {/* ══════════════════ STATS ══════════════════ */}
      <section className="stats-section stats-section--3d">
        <LightningSystem active={false} />
        <div className="container stats-grid">
          {stats.map(({ value, label, icon }, idx) => {
            const num = value.replace(/[^0-9]/g, '');
            const suffix = value.replace(/[0-9]/g, '');
            return (
              <motion.div
                key={label}
                className="stat-card stat-card--3d"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={revealVariants}
                custom={idx}
                whileHover={{ y: -12, scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <TiltCard style={{ height: '100%', borderRadius: '1.5rem' }}>
                  <div className="stat-card__emoji">{icon}</div>
                  <div className="stat-card__value">
                    <Counter target={num} suffix={suffix} />
                  </div>
                  <div className="stat-card__label">{label}</div>
                  <div className="stat-card__glow" />
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════ PORTFOLIO PREVIEW ══════════════════ */}
      <section className="section section-center portfolio-preview">
        <LightningSystem active={false} />
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
            <motion.span className="section-badge section-badge--glow" variants={revealVariants}>Our Work</motion.span>
            <motion.h2 className="section-title" variants={revealVariants} custom={1}>
              Projects That <span className="gradient-text gradient-text--animated">Deliver Results</span>
            </motion.h2>
            <motion.p className="section-subtitle" variants={revealVariants} custom={2}>
              Real websites built for real businesses — see what we've delivered for our clients.
            </motion.p>
          </motion.div>
          <div className="portfolio-preview__grid">
            {[
              { name: 'Rainbow Preschool', img: rainbowImg, result: '3x more admissions enquiries', color: '#6c63ff', tag: 'Preschool' },
              { name: 'Gurukul Preschool', img: gurukulImg, result: 'Full digital presence achieved', color: '#00d4aa', tag: 'Preschool' },
              { name: 'Rudreshwar Tel Udyog', img: oilShopImg, result: 'WhatsApp ordering enabled', color: '#f59e0b', tag: 'Business' },
            ].map(({ name, img, result, color, tag }, idx) => (
              <motion.div
                key={name}
                className="portfolio-preview-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={revealVariants}
                custom={idx * 0.15}
                whileHover={{ y: -8 }}
              >
                <div className="portfolio-preview-card__img-wrap">
                  <img src={img} alt={name} className="portfolio-preview-card__img" loading="lazy" />
                  <span className="portfolio-preview-card__tag" style={{ background: color }}>{tag}</span>
                </div>
                <div className="portfolio-preview-card__body">
                  <h4 className="portfolio-preview-card__name">{name}</h4>
                  <p className="portfolio-preview-card__result" style={{ color }}>
                    <FiTrendingUp size={13} /> {result}
                  </p>
                </div>
                <div className="portfolio-preview-card__bar" style={{ background: color }} />
              </motion.div>
            ))}
          </div>
          <motion.div style={{ marginTop: '2.5rem' }} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={revealVariants}>
            <MagneticBtn to="/portfolio" className="btn btn-primary btn-lg btn--glow">
              View All Projects <FiArrowRight />
            </MagneticBtn>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section className="section section-center services-preview services-preview--ultra">
        <div className="section__lightning-bg">
          <LightningSystem active={true} />
        </div>
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span className="section-badge section-badge--glow" variants={revealVariants}>Our Expertise</motion.span>
            <motion.h2 className="section-title" variants={revealVariants} custom={1}>
              Services We <span className="gradient-text gradient-text--animated">Excel At</span>
            </motion.h2>
            <motion.p className="section-subtitle" variants={revealVariants} custom={2}>
              From concept to deployment, we deliver end-to-end digital solutions tailored to your needs.
            </motion.p>
          </motion.div>

          <div className="grid-3">
            {services.map(({ icon: Icon, title, desc, badge, color }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={revealVariants}
                custom={idx * 0.8}
              >
                <TiltCard className="service-preview-card service-preview-card--3d">
                  {badge && (
                    <motion.span
                      className="service-preview-card__badge"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + idx * 0.1, type: 'spring' }}
                    >
                      {badge}
                    </motion.span>
                  )}
                  <motion.div
                    className="service-preview-card__icon"
                    style={{ background: `${color}22`, color }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={28} />
                  </motion.div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link to="/services" className="service-preview-card__link">
                    Learn more <FiArrowRight size={14} />
                  </Link>
                  {/* Bottom shimmer */}
                  <div className="card__shimmer" style={{ '--clr': color }} />
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            style={{ marginTop: '2.5rem' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={revealVariants}
          >
            <MagneticBtn to="/services" className="btn btn-primary btn-lg btn--glow">
              View All Services <FiArrowRight />
            </MagneticBtn>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ WHY US ══════════════════ */}
      <section className="why-us section why-us--ultra">
        <div className="why-us__thunder-bg">
          <LightningSystem active={true} />
        </div>
        <div className="container why-us__inner">
          <motion.div
            className="why-us__content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.span className="section-badge section-badge--glow" variants={revealVariants}>Why Choose Us</motion.span>
            <motion.h2 variants={revealVariants} custom={1}>
              Your Trusted <span className="gradient-text gradient-text--animated">Technology Partner</span>
            </motion.h2>
            <motion.p variants={revealVariants} custom={2} style={{ margin: '1rem 0 2rem' }}>
              We don't just write code — we build relationships. With a passionate team and proven methodology,
              we've helped 4+ businesses achieve their digital goals.
            </motion.p>
            <div className="why-us__list">
              {whyUs.map((item, i) => (
                <motion.div
                  key={item}
                  className="why-us__item"
                  variants={revealVariants}
                  custom={i * 0.5}
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <motion.div
                    className="why-us__check"
                    whileHover={{ rotate: 360, scale: 1.3 }}
                    transition={{ duration: 0.5 }}
                  >
                    <FiCheck />
                  </motion.div>
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
            <motion.div variants={revealVariants} custom={8} style={{ marginTop: '2rem' }}>
              <MagneticBtn to="/about" className="btn btn-primary btn--glow">
                About Our Company <FiArrowRight />
              </MagneticBtn>
            </motion.div>
          </motion.div>

          <motion.div
            className="why-us__visual"
            initial={{ opacity: 0, x: 80, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="why-us__card card-glass card-glass--ultra">
              <div className="why-us__tag">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  style={{ display: 'inline-block' }}
                >
                  <FiBarChart2 />
                </motion.span>
                {' '}Growth Focused
              </div>
              <h3>Delivering ROI,<br />Not Just Code</h3>
              <p>Every solution we build is designed with your business outcomes in mind — measurable, scalable, and impactful.</p>
              <div className="why-us__metrics">
                {[
                  { val: '3x', label: 'Average ROI' },
                  { val: '60%', label: 'Cost Reduction' },
                  { val: '40%', label: 'Faster Launch' },
                ].map(({ val, label }, i) => (
                  <motion.div
                    key={label}
                    className="metric metric--3d"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span>{val}</span>
                    <small>{label}</small>
                  </motion.div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ CLIENT LOGOS ══════════════════ */}
      <section className="client-logos-section">
        <div className="container">
          <motion.p className="client-logos__label"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Trusted By
          </motion.p>
          <div className="client-logos__track-wrap">
            <div className="client-logos__track">
              {['Rainbow Preschool', 'Gurukul Preschool', 'Rudreshwar Tel Udyog', 'Rainbow Preschool', 'Gurukul Preschool', 'Rudreshwar Tel Udyog'].map((name, i) => (
                <div key={i} className="client-logo-pill">{name}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ TESTIMONIALS ══════════════════ */}
      <section className="testimonials section section-center testimonials--ultra">
        <div className="container">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.span className="section-badge section-badge--glow" variants={revealVariants}>Client Stories</motion.span>
            <motion.h2 className="section-title" variants={revealVariants} custom={1}>
              What Our <span className="gradient-text gradient-text--animated">Clients Say</span>
            </motion.h2>
          </motion.div>

          <div className="testimonials__slider testimonials__slider--3d">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                className="testimonial-card testimonial-card--3d"
                initial={{ opacity: 0, x: 100, rotateY: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, rotateY: -20, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard style={{ borderRadius: '1.5rem' }}>
                  {/* Quote decoration */}
                  <div className="testimonial-card__quote-mark">"</div>

                  <div className="testimonial-card__stars">
                    {[...Array(testimonials[activeSlide].rating)].map((_, i) => (
                      <motion.span key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.07, type: 'spring' }}
                      >
                        <FiStar fill="#f59e0b" color="#f59e0b" />
                      </motion.span>
                    ))}
                  </div>

                  <blockquote>"{testimonials[activeSlide].text}"</blockquote>

                  <div className="testimonial-card__author">
                    <motion.div
                      className="testimonial-card__avatar"
                      style={{ background: `${testimonials[activeSlide].color}33`, color: testimonials[activeSlide].color, border: `2px solid ${testimonials[activeSlide].color}66` }}
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      {testimonials[activeSlide].avatar}
                    </motion.div>
                    <div>
                      <strong>{testimonials[activeSlide].name}</strong>
                      <span>{testimonials[activeSlide].role}</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>

            <div className="testimonials__controls">
              <motion.button className="testimonials__btn" onClick={prev} whileHover={{ scale: 1.15, x: -3 }} whileTap={{ scale: 0.9 }}>
                <FiChevronLeft />
              </motion.button>
              <div className="testimonials__dots">
                {testimonials.map((_, i) => (
                  <motion.button
                    key={i}
                    className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    animate={{ scale: i === activeSlide ? 1.4 : 1 }}
                    whileHover={{ scale: 1.3 }}
                  />
                ))}
              </div>
              <motion.button className="testimonials__btn" onClick={next} whileHover={{ scale: 1.15, x: 3 }} whileTap={{ scale: 0.9 }}>
                <FiChevronRight />
              </motion.button>
            </div>
          </div>

          <motion.div
            style={{ marginTop: '2rem' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={revealVariants}
          >
            <Link to="/reviews" className="btn btn-outline btn--glow-outline">
              Read All Reviews <FiArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="cta-section cta-section--ultra">
        <LightningSystem active={true} />
        <div className="cta-section__orb cta-section__orb--1" />
        <div className="cta-section__orb cta-section__orb--2" />

        {/* Animated grid */}
        <div className="cta-section__grid" />

        <motion.div
          className="container cta-section__inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.div
            className="cta-section__icon"
            variants={revealVariants}
            animate={{ rotate: [0, 5, -5, 0], y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <FiLayers size={36} />
          </motion.div>

          <motion.h2 variants={revealVariants} custom={1}>
            Ready to Build Something{' '}
            <span className="gradient-text gradient-text--animated">Amazing?</span>
          </motion.h2>

          <motion.p variants={revealVariants} custom={2}>
            Let's turn your idea into a world-class product. Get a free consultation today.
          </motion.p>

          <motion.div className="cta-section__actions" variants={revealVariants} custom={3}>
            <MagneticBtn to="/contact" className="btn btn-white btn-lg btn--glow-white">
              Get Free Consultation <FiArrowRight />
            </MagneticBtn>
            <MagneticBtn to="/services" className="btn btn-lg cta-outline">
              View Services
            </MagneticBtn>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
