import { Link } from 'react-router-dom';
import { FiCode, FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiGithub, FiArrowRight } from 'react-icons/fi';
import './Footer.css';

const footerLinks = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Reviews', to: '/reviews' },
  ],
  Services: [
    { label: 'Web Development', to: '/services' },
    { label: 'Mobile Apps', to: '/services' },
    { label: 'Cloud Solutions', to: '/services' },
    { label: 'AI & ML', to: '/services' },
    { label: 'UI/UX Design', to: '/services' },
  ],
  Support: [
    { label: 'Contact Us', to: '/contact' },
    { label: 'FAQs', to: '/contact' },
    { label: 'Privacy Policy', to: '/' },
    { label: 'Terms of Service', to: '/' },
  ],
};

const socials = [
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiGithub, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="footer">
      {/* Newsletter CTA */}
      <div className="footer__newsletter">
        <div className="container footer__newsletter-inner">
          <div>
            <h3>Stay Updated with CodeForge</h3>
            <p>Get the latest tech insights and company news delivered to your inbox.</p>
          </div>
          <form className="footer__newsletter-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" className="footer__newsletter-input" required />
            <button type="submit" className="btn btn-primary">
              Subscribe <FiArrowRight />
            </button>
          </form>
        </div>
      </div>

      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <div className="logo-icon">
                <FiCode />
              </div>
              <span>Code<span className="logo-accent">Forge</span> Solutions</span>
            </Link>
            <p className="footer__tagline">
              Building tomorrow's digital solutions today. We craft innovative software that drives business growth.
            </p>
            <div className="footer__socials">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="footer__social-link">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading} className="footer__col">
              <h4 className="footer__col-title">{heading}</h4>
              <ul className="footer__col-links">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="footer__col-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Info</h4>
            <ul className="footer__contact-list">
              <li>
                <FiMapPin className="contact-icon" />
                <span>Near DYPCOE&I, Varale,<br />Pune, Maharashtra 410507</span>
              </li>
              <li>
                <FiPhone className="contact-icon" />
                <a href="tel:+919764781298">+91 9764781298</a>

              </li>
              <li>
                <FiMail className="contact-icon" />
                <a href="mailto:officialporash@gmail.com">officialporas@gmail.com</a>
                <a href="mailto:omkardeshmukh394@gmail.com">omkardeshmukh394@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} CodeForge Solutions. All rights reserved.</p>
          <p>Designed &amp; Built with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
}
