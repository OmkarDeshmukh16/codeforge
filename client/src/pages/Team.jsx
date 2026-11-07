import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiGithub, FiMail } from 'react-icons/fi';
import './Team.css';
import LightningSystem from '../components/ui/LightningSystem';

const team = [
  {
    name: 'Omkar Deshmukh',
    role: 'Software engineer',
    initials: 'OD',
    color: '#2563eb',
    bio: 'Full-stack architect with 3+ years of experience. Passionate about Machine learning, specialising in NLP and computer vision.',
    skills: ['MERN', 'Python', 'AI', 'ML', 'NLP'],
    linkedin: 'https://www.linkedin.com/in/omkar-deshmukh-631992251/',
    twitter: 'https://x.com/omraje_com',
    github: 'https://github.com/OmkarDeshmukh16',
    email: 'omkardeshmukh394@gmail.com'
  },

  {
    name: 'Janhavi Birajdar',
    role: 'UI/UX Designer',
    initials: 'JB',
    color: '#d97706',
    bio: 'Award-winning UX designer with a passion for pixel-perfect interfaces and user-centered design. Creates experiences users love.',
    skills: ['UI/UX', 'Animations', 'Design Systems', 'Motion'],
    linkedin: 'https://www.linkedin.com/in/janhavi-birajdar-24a2a23b8/',
    twitter: '#',
    github: 'https://github.com/JanhaviBirajdar',
    email: 'janhavibirajdar23@gmail.com'
  },

  {
    name: 'Sanskar Dumbre',
    role: 'Full-stack Developer',
    initials: 'SD',
    color: '#7c3aed',
    bio: 'Passionate Full-Stack Developer with 2+ years of experience building scalable, responsive, and user-friendly web applications. Skilled in MERN stack development, REST APIs, database management, and AI integration, with a strong interest in Machine Learning, NLP, and Computer Vision. Focused on transforming innovative ideas into real-world digital solutions.',
    skills: ['Node.js', 'React.js', 'MongoDB', 'Rest APIs'],
    linkedin: 'https://www.linkedin.com/in/sanskar-dumbre-a60404354/',
    twitter: '#',
    github: 'https://github.com/dumbresanskar20',
    email: 'dumbresanskar23@gmail.com'
  },
  {
    name: 'Shreyash Nikam',
    role: 'Full-stack Developer',
    initials: 'SN',
    color: '#7c3aed',
    bio: 'Passionate Full-Stack Developer with hands-on experience in building modern, responsive, and user-friendly web applications. Experienced in developing real-world projects, implementing innovative solutions, and collaborating with teams to build scalable and efficient applications. Always eager to explore emerging technologies and continuously improve development skills.',
    skills: ['Node.js', 'React.js', 'MongoDB', 'Rest APIs'],
    linkedin: 'https://www.linkedin.com/in/shreyash-nikam-30b5b5304/',
    twitter: '#',
    github: 'https://github.com/shreyashnikam98',
    email: 'shreyashnikam100@gmail.com'
  },
  {
    name: 'Kalyani Darekar',
    role: 'Full-stack Developer',
    initials: 'KD',
    color: '#059669',
    bio: '. Published researcher with industry experience at top tech companies.',
    skills: ['Python / TensorFlow', 'NLP', 'Computer Vision', 'Data Science'],
    linkedin: 'https://www.linkedin.com/in/kalyani-darekar-7a43b72a2/',
    twitter: '#',
    github: 'https://github.com/KalyaniDarekar',
    email: 'kalyanidarekar@gmail.com'
  },
  {
    name: 'Puja Davghat',
    role: 'Full-stack Developer',
    initials: 'PD',
    color: '#c62155',
    bio: 'Passionate Full-Stack Developer with hands-on experience in building modern, responsive, and user-friendly web applications. Experienced in developing real-world projects, implementing innovative solutions, and collaborating with teams to build scalable and efficient applications. Always eager to explore emerging technologies and continuously improve development skills.',
    skills: ['Node.js', 'React.js', 'MongoDB', 'Rest APIs'],
    linkedin: 'https://www.linkedin.com/in/shreyash-nikam-30b5b5304/',
    twitter: '#',
    github: 'https://github.com/shreyashnikam98',
    email: 'davghatpooja@gmail.com'
  },

];

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 10 },
  visible: i => ({
    opacity: 1, y: 0, rotateX: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' }
  })
};

export default function Team() {
  return (
    <div className="team-page">
      <section className="page-header">
        <LightningSystem active={true} />
        <div className="container">
          <span className="section-badge">Our People</span>
          <h1>Meet Our <span className="gradient-text">Expert Team</span></h1>
          <p>Behind every great product is a great team. Meet the brilliant minds driving innovation at CodeForge Solutions.</p>
        </div>
      </section>

      <section className="section team-section">
        <div className="container">
          <div className="team-grid">
            {team.map(({ name, role, initials, color, bio, skills, linkedin, twitter, github, email }, i) => (
              <motion.div
                key={name}
                className="team-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                style={{ '--accent-color': color }}
              >
                <div className="team-card__header">
                  <div className="team-card__avatar" style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}>
                    {initials}
                  </div>
                  <div className="team-card__glow" style={{ background: `radial-gradient(circle, ${color}22 0%, transparent 70%)` }} />
                </div>

                <div className="team-card__body">
                  <h3>{name}</h3>
                  <span className="team-card__role">{role}</span>
                  <p className="team-card__bio">{bio}</p>

                  <div className="team-card__skills">
                    {skills.map(skill => (
                      <span key={skill} className="skill-tag">{skill}</span>
                    ))}
                  </div>

                  <div className="team-card__socials">
                    <a href={linkedin} aria-label="LinkedIn" className="social-link" style={{ '--hover': color }}>
                      <FiLinkedin size={16} />
                    </a>
                    <a href={twitter} aria-label="Twitter" className="social-link" style={{ '--hover': color }}>
                      <FiTwitter size={16} />
                    </a>
                    <a href={github} aria-label="GitHub" className="social-link" style={{ '--hover': color }}>
                      <FiGithub size={16} />
                    </a>
                    <a href={`mailto:${email}`} aria-label="Email" className="social-link" style={{ '--hover': color }}>
                      <FiMail size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="section team-join">
        <div className="container team-join__inner">
          <div>
            <span className="section-badge">We're Hiring!</span>
            <h2>Want to Join Our <span className="gradient-text">Team?</span></h2>
            <p style={{ marginTop: '1rem', maxWidth: '480px' }}>
              We're always looking for talented engineers, designers, and problem-solvers to join us on our mission.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
            {['Full Stack Developer', 'React Native Developer', 'DevOps Engineer'].map(role => (
              <div key={role} className="open-role">
                <span>{role}</span>
                <span className="open-role__badge">Open</span>
              </div>
            ))}
            <a href="mailto:officialporas@gmail.com" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
              <FiMail /> Apply Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
