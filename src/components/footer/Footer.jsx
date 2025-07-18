import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa'
import styles from './Footer.module.css'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/yourusername'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/yourusername'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter />,
      url: 'https://twitter.com/yourusername'
    }
  ]

  const navLinks = ['Home', 'About', 'Skills', 'Portfolio', 'Contact']

  return (    <footer id="footer" className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <motion.div 
            className={styles.brand}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25 }}
          >
            <h3>Contact Info</h3>
          <p> <FaEnvelope /> <strong> :  ugwuchimezie3</strong></p><br />
          <p><FaPhone />   <strong> : +23407061954752</strong> </p><br />
          <p><FaMapMarkerAlt />  <strong> : Lagos State, Nigeria.</strong> </p>
          </motion.div>

          <motion.div 
            className={styles.navigation}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.05 }}
          >
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.toLowerCase()}`}>{link}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className={styles.social}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: 0.1 }}
          >
            <h4>Connect With Me</h4>
            <div className={styles.socialLinks}>
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.copyright}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25, delay: 0.15 }}
        >
          <p>
            © {currentYear} All rights reserved <FaHeart className={styles.heart} /> ugwu chimezie
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
