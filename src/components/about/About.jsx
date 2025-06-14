import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaDownload, 
  FaLaptopCode, 
  FaTools, 
  FaRocket,
  FaUserGraduate,
  FaCode
} from 'react-icons/fa'
import styles from './About.module.css'

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.h2 
          className="section__title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.aboutInfo}>
            <div className={styles.introductionWrapper}>
              <span className={styles.codeIcon}><FaCode /></span>
              <p className={styles.introduction}>
                Hello! I'm a passionate Full Stack Developer based in Nigeria, focused on 
                creating clean and user-friendly web applications.
              </p>
            </div>
            
            <div className={styles.details}>
              <motion.div 
                className={styles.detailGroup}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className={styles.detailHeader}>
                  <FaUserGraduate className={styles.detailIcon} />
                  <h3>Experience:</h3>
                </div>
                <p>3+ years in web development, working with modern technologies 
                and frameworks to build scalable applications.</p>
              </motion.div>

              <motion.div 
                className={styles.detailGroup}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className={styles.detailHeader}>
                  <FaTools className={styles.detailIcon} />
                  <h3>Skills:</h3>
                </div>
                <p>Frontend Development, Backend Development, Database Management, 
                API Design, and Cloud Services.</p>
              </motion.div>

              <motion.div 
                className={styles.detailGroup}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className={styles.detailHeader}>
                  <FaRocket className={styles.detailIcon} />
                  <h3>Current Focus:</h3>
                </div>
                <p>Building modern web applications using React, Node.js, and related 
                technologies while staying updated with industry best practices.</p>
              </motion.div>
            </div>

            <div className={styles.cta}>
              <motion.a
                href="#contact"
                className="btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLaptopCode className={styles.btnIcon} />
                Contact Me
              </motion.a>
              <motion.a
                href="/your-resume.pdf"
                className={styles.resumeBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <FaDownload className={styles.btnIcon} /> Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
