import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FiCode, FiSearch, FiVideo, FiLayers, FiMessageSquare, FiRefreshCw, FiShare2, FiEye,
  FiArrowRight, FiCheck
} from 'react-icons/fi';
import './Services.css';
import LightningSystem from '../components/ui/LightningSystem';

const services = [
  {
    icon: FiCode,
    title: 'Web Development',
    color: '#2563eb',
    desc: 'Build fast, secure, and fully responsive custom websites engineered for maximum performance. We develop scalable single-page applications, robust e-commerce solutions, and custom web portals that engage visitors and boost conversions.',
    features: [
      'Custom React & Next.js Development',
      'Mobile-First Responsive Design',
      'Page Speed & Code Optimization',
      'Secure APIs & Headless CMS Integration'
    ],
    badge: 'Most Popular'
  },
  {
    icon: FiSearch,
    title: 'Search Engine Optimization (SEO)',
    color: '#be185d',
    desc: 'Dominate search engine results pages, outrank competitors, and drive continuous high-intent organic traffic to your business. Our data-backed SEO strategies focus on keyword dominance, local search visibility, and high-authority page growth.',
    features: [
      'On-Page SEO & Content Strategy',
      'Technical SEO Audits & Auditing',
      'Local SEO & Google Business Growth',
      'High-Quality Backlink Building'
    ],
    badge: 'Top Choice'
  },
  {
    icon: FiVideo,
    title: 'Professional Video Editing',
    color: '#7c3aed',
    desc: 'Captivate your audience with high-converting, cinematic-quality video production. We craft engaging social media reels, premium corporate promo videos, high-retention vlogs, and custom AI animated sequences designed to boost brand awareness.',
    features: [
      'Social Reels, TikToks & YouTube Shorts',
      'Corporate & Event Promo Videos',
      'AI Animation & Motion Graphics',
      'Professional Audio & Color Grading'
    ],
    badge: 'Trending'
  },
  {
    icon: FiLayers,
    title: 'UI/UX Design',
    color: '#d97706',
    desc: 'Convert visits into sales with beautiful, user-centered interface designs. We conduct user research, build high-fidelity wireframes, and design scalable, premium layouts that elevate your brand and ensure seamless customer navigation.',
    features: [
      'User Research & Wireframing',
      'High-Fidelity Figma Prototypes',
      'Scalable UI Design Systems',
      'Conversion-Rate Optimized Interfaces'
    ],
    badge: 'Expert Rated'
  },
  {
    icon: FiMessageSquare,
    title: 'AI Chatbot Integration',
    color: '#059669',
    desc: 'Streamline customer support and automate lead capture 24/7. We integrate advanced AI assistants powered by OpenAI, Gemini, or custom NLP models directly into your systems to answer queries instantly and qualify potential leads.',
    features: [
      'Custom AI Assistant Programming',
      '24/7 Intelligent Customer Support',
      'Automated Lead Capture & Routing',
      'CRM & Analytics Dashboard Sync'
    ],
    badge: 'Smart Tech'
  },
  {
    icon: FiRefreshCw,
    title: 'Website Redesign',
    color: '#dc2626',
    desc: 'Modernize your online presence and turn your slow website into a high-performance sales machine. We upgrade outdated web designs, improve speed performance, fix unresponsive layouts, and align your site with modern user expectations.',
    features: [
      'Outdated Design & Layout Modernization',
      'Performance & Speed Optimization',
      'Mobile-Responsive Layout Revamp',
      'Modern Security Standards Upgrade'
    ],
    badge: 'ROI Focused'
  },
  {
    icon: FiShare2,
    title: 'Social Media Management',
    color: '#0ea5e9',
    desc: 'Build an active online community and consistently grow your brand\'s digital authority. We formulate content strategies, design striking posts, schedule weekly updates, and run targeted ad campaigns to maximize social engagement.',
    features: [
      'Strategic Content Creation & Scheduling',
      'Stunning Custom Social Graphics',
      'Targeted Lead & Brand Ads',
      'Audience Growth & Performance Reports'
    ],
    badge: 'High Growth'
  },
  {
    icon: FiEye,
    title: 'Virtual Tour Video Creation',
    color: '#0891b2',
    desc: 'Bring your physical locations online with immersive, high-definition virtual tours. Perfect for real estate, hotels, schools, and offices, our walk-through tours give virtual buyers and visitors an interactive, realistic 360-degree preview.',
    features: [
      'High-Definition 360° Walkthroughs',
      'Interactive Navigation & Embeds',
      'Drone & Aerial View Integration',
      'Optimized for Seamless Web Loading'
    ],
    badge: 'Premium'
  }
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We understand your business, goals, and technical requirements.' },
  { step: '02', title: 'Design', desc: 'Wireframes, prototypes, and architecture planning.' },
  { step: '03', title: 'Develop', desc: 'Agile development with weekly demos and updates.' },
  { step: '04', title: 'Deploy', desc: 'Thorough testing, deployment, and launch support.' },
  { step: '05', title: 'Support', desc: 'Ongoing maintenance, monitoring, and feature updates.' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.5 }
  })
};

export default function Services() {
  return (
    <div className="services-page">
      <section className="page-header">
        <LightningSystem active={true} />
        <div className="container">
          <span className="section-badge">What We Do</span>
          <h1>Our <span className="gradient-text">Services</span></h1>
          <p>Full-spectrum technology services to power your digital transformation, from ideation to launch and beyond.</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map(({ icon: Icon, title, color, desc, features, badge }, i) => (
              <motion.div
                key={title}
                className="service-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {badge && <span className="service-card__badge">{badge}</span>}
                <div className="service-card__icon" style={{ '--color': color }}>
                  <Icon size={26} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul className="service-card__features">
                  {features.map(f => (
                    <li key={f}><FiCheck size={13} className="feat-check" /> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="service-card__cta">
                  Get Quote <FiArrowRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-center services-process">
        <div className="container">
          <span className="section-badge">How We Work</span>
          <h2 className="section-title">Our <span className="gradient-text">Development Process</span></h2>
          <p className="section-subtitle">A proven, agile methodology that ensures quality and on-time delivery every time.</p>
          <div className="process-steps">
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                className="process-step"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <div className="process-step__num">{step}</div>
                <h4>{title}</h4>
                <p>{desc}</p>
                {i < process.length - 1 && <div className="process-step__connector" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="container section-center">
          <h2>Let's Build Something <span className="gradient-text">Great Together</span></h2>
          <p style={{ margin: '1rem auto 2rem', maxWidth: '500px', color: 'rgba(255,255,255,0.7)' }}>
            Not sure which service you need? Let's have a free 30-minute consultation to find out.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-white btn-lg">Schedule Free Call <FiArrowRight /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
