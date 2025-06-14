import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import profile from '../../assets/profile.jpg' // Update with your profile image path
import styles from './Home.module.css'

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className="container">
        <div className={styles.content}>
          <motion.div
            className={styles.textContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className={styles.title}>
              Hi, I'm <span className={styles.name}>Ugwu Chimezie</span>
            </h1>
            <h2 className={styles.subtitle}>Full Stack Developer</h2>
            <p className={styles.description}>
              I craft responsive websites and web applications that provide users with a seamless experience.
            </p>
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
            <div className={styles.socialLinks}>
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            className={styles.imageContent}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className={styles.heroImage}>
              {/* Add your profile image here */}
              <img src={profile} alt="Profile" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Home
