import { motion } from 'framer-motion';

export default function WhatsAppBtn() {
  return (
    <motion.a
      href="https://wa.me/919764781298?text=Hi%20CodeForge%20Solutions!%20I%20would%20like%20a%20free%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {/* Pulse rings */}
      <span className="whatsapp-fab__ring whatsapp-fab__ring--1" />
      <span className="whatsapp-fab__ring whatsapp-fab__ring--2" />

      {/* WhatsApp SVG Icon */}
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="whatsapp-fab__icon">
        <path
          d="M16 2C8.268 2 2 8.268 2 16c0 2.478.67 4.8 1.838 6.797L2 30l7.434-1.812A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
          fill="#fff"
        />
        <path
          d="M23.472 19.817c-.317-.159-1.878-.927-2.169-1.033-.291-.106-.502-.159-.713.159-.212.317-.82 1.033-.1.005 1.247-.212.317-.502.053-.661-.159-.212-.609-.847-1.185-1.524a6.84 6.84 0 01-1.4-3.468c0-.925.238-1.746.661-2.46.212-.37.502-.714.82-.979.317-.265.661-.451 1.003-.53.343-.08.714-.08 1.057-.027.343.053.661.212.952.45.291.24.502.557.634.926.132.37.132.766.027 1.15-.106.383-.317.74-.608 1.034-.291.291-.634.503-1.003.608l-.317.08.08.317c.265.925.767 1.747 1.47 2.38.662.608 1.482 1.008 2.354 1.166l.317.053v-.317c0-.397-.106-.794-.317-1.138-.212-.343-.503-.634-.847-.82zm-7.472 6.95A11.95 11.95 0 018.98 24.05L8.56 23.77l-3.718.902.928-3.613-.304-.424A11.96 11.96 0 014 16C4 9.373 9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"
          fill="#25D366"
        />
      </svg>

      {/* Tooltip */}
      <span className="whatsapp-fab__tooltip">Chat on WhatsApp</span>
    </motion.a>
  );
}
