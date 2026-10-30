import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiCode, FiSmartphone, FiTrendingUp } from 'react-icons/fi';
import LightningSystem from '../components/ui/LightningSystem';
import rainbowImg from '../assets/rainbow_preschool.png';
import gurukulImg from '../assets/gurukul_preschool.png';
import oilShopImg from '../assets/oil_shop.png';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    name: 'Rainbow Preschool',
    category: 'Preschool',
    image: rainbowImg,
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    problem: 'The school had no online presence and was losing admissions to competitors with websites.',
    result: 'Online enquiries increased significantly. Parents could now find the school on Google and submit admission forms digitally.',
    highlight: '3x more admissions enquiries',
    color: '#6c63ff',
    link: 'https://bunnylandpreschool-talegaon-dabhade.com/',
  },
  {
    id: 2,
    name: 'Intellxskill Technologies',
    category: 'Business',
    image: "",
    tech: ['React', 'MongoDB', 'Tailwind CSS', 'Framer Motion'],
    problem: 'Needed a modern, mobile-friendly website to showcase their curriculum and attract local families.',
    result: 'Fully mobile-responsive website launched with online enquiry system, courses, and blog section.',
    highlight: 'Full digital presence',
    color: '#00d4aa',
    link: 'https://www.intellxskill.in',
  },
  {
    id: 3,
    name: 'Rudreshwar Tel Udyog',
    category: 'Business',
    image: oilShopImg,
    tech: ['HTML5', 'CSS3', 'JavaScript', 'WhatsApp API'],
    problem: 'Local oil business wanted to take orders online and build brand credibility.',
    result: 'Professional business website with product showcase and direct WhatsApp ordering, helping reach a wider market.',
    highlight: 'WhatsApp ordering enabled',
    color: '#f59e0b',
    link: 'https://rudreshwarteludyog.com/',
  },
];

const filters = ['All', 'Preschool', 'Business'];

const revealVariants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(6px)' },
  visible: (i = 0) => ({
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page">
      {/* Header */}
      <section className="page-header">
        <LightningSystem active={true} />
        <div className="container">
          <span className="section-badge section-badge--glow">Our Work</span>
          <h1>Projects That <span className="gradient-text">Deliver Results</span></h1>
          <p>Real websites, real businesses, real outcomes. Here's what we've built for our clients.</p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="portfolio-filters section">
        <div className="container">
          <motion.div
            className="portfolio-filters__tabs"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {filters.map((f, i) => (
              <motion.button
                key={f}
                variants={revealVariants}
                custom={i}
                className={`portfolio-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setActiveFilter(f)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                {f}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="portfolio-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((project, idx) => (
                <motion.article
                  key={project.id}
                  className="portfolio-card"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.15 }}
                  variants={revealVariants}
                  custom={idx * 0.15}
                  whileHover={{ y: -8 }}
                >
                  {/* Screenshot */}
                  <div className="portfolio-card__img-wrap">
                    <img
                      src={project.image}
                      alt={`${project.name} website screenshot`}
                      className="portfolio-card__img"
                      loading="lazy"
                    />
                    <div className="portfolio-card__overlay">
                      <a
                        href={project.link}
                        className="portfolio-card__view-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiExternalLink size={18} /> View Project
                      </a>
                    </div>
                    <span className="portfolio-card__category" style={{ '--clr': project.color }}>
                      {project.category}
                    </span>
                  </div>

                  <div className="portfolio-card__body">
                    {/* Highlight badge */}
                    <div className="portfolio-card__highlight" style={{ '--clr': project.color }}>
                      <FiTrendingUp size={13} /> {project.highlight}
                    </div>

                    <h3 className="portfolio-card__title">{project.name}</h3>

                    {/* Tech stack */}
                    <div className="portfolio-card__tech">
                      {project.tech.map(t => (
                        <span key={t} className="tech-tag">{t}</span>
                      ))}
                    </div>

                    {/* Problem / Result */}
                    <div className="portfolio-card__details">
                      <div className="portfolio-detail">
                        <span className="portfolio-detail__label">
                          <FiCode size={13} /> Challenge
                        </span>
                        <p>{project.problem}</p>
                      </div>
                      <div className="portfolio-detail">
                        <span className="portfolio-detail__label" style={{ color: project.color }}>
                          <FiTrendingUp size={13} /> Result
                        </span>
                        <p>{project.result}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom shimmer bar */}
                  <div className="portfolio-card__shimmer" style={{ background: project.color }} />
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-cta section">
        <LightningSystem active={true} />
        <div className="portfolio-cta__orb portfolio-cta__orb--1" />
        <div className="portfolio-cta__orb portfolio-cta__orb--2" />
        <motion.div
          className="container section-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span className="section-badge section-badge--glow" variants={revealVariants}>
            Start Your Project
          </motion.span>
          <motion.h2 variants={revealVariants} custom={1}>
            Ready to Build Your <span className="gradient-text gradient-text--animated">Dream Website?</span>
          </motion.h2>
          <motion.p variants={revealVariants} custom={2} style={{ margin: '1rem auto 2.5rem', maxWidth: 520 }}>
            Join our happy clients. We build fast, beautiful, mobile-friendly websites that help your business get more customers.
          </motion.p>
          <motion.div variants={revealVariants} custom={3} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary btn-lg btn--glow">
              Get Free Consultation <FiArrowRight />
            </Link>
            <Link to="/pricing" className="btn btn-outline btn-lg">
              View Pricing
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
