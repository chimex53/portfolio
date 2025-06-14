/**
 * Hero section component that serves as the landing page of the portfolio.
 * Features personal introduction, professional title, and call-to-action buttons.
 */
import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import profile from '../../assets/profile.jpg' 
import styles from './Home.module.css'

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className="container">
        <div className={styles.content}>
          {/* Left side - Text content with animations */}
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main title and name with highlight */}
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.name}>Ugwu Chimezie</span>
            </h1>

            {/* Professional skills and expertise */}
            <h2 className={styles.subtitle}>Expert React Developer | Nextjs | Supabase | Tailwind | SEO Expert </h2>
            
            {/* Brief introduction */}
            <p className={styles.description}>
              I craft responsive websites and web applications that provide users with a seamless experience.
            </p>

            {/* Call-to-action buttons with hover animations */}
            <div className={styles.cta}>
              <motion.a
                href="#contact"
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
              <motion.a
                href="#portfolio"
                className={`btn ${styles.secondaryBtn}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
              </motion.a>
            </div>

            {/* Social media links with hover effects */}
            <div className={styles.socialLinks}>
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                aria-label="Twitter Profile"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Right side - Profile image with animation */}
          <motion.div
            className={styles.imageContent}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImage}>
              <img src={profile} alt="Profile" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
