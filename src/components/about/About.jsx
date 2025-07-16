import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaDownload, 
  FaLaptopCode, 
  FaTools, 
  FaRocket,
  FaUserGraduate,
  FaCode,
  FaShoppingCart,
  FaLandmark,
  FaUserCircle,
  FaSchool
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
          transition={{ duration: 0.25 }}
        >
          About Me
        </motion.h2>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
        >
          <div className={styles.aboutInfo}>
            <div className={styles.introductionWrapper}>
              <span className={styles.codeIcon}><FaCode /></span>
              <div className={styles.introduction}>
                <h3 className={styles.introTitle}>
                  <FaRocket className={styles.titleIcon} />
                  Web Development Engineered for Your Success
                </h3>
                
                <div className={styles.introSection}>
                  <p>
                    Hi, I'm Ugwu Chimezie – a Top-Rated Freelancer with 3+ years of experience in delivering fast, responsive, and scalable websites tailored to your business goals. I'm available for immediate project start and dedicated to bringing your ideas to life with precision and creativity.
                  </p>
                </div>

                <div className={styles.serviceSection}>
                  <h4>
                    <FaLaptopCode className={styles.sectionIcon} />
                    Specialized Web Development Services
                  </h4>
                  <p>
                    I specialize in creating high-performance websites using the latest web development tools and technologies.
                  </p>
                  
                  <div className={styles.expertiseList}>
                    <h4>
                      <FaTools className={styles.sectionIcon} />
                      My Expertise Covers:
                    </h4>
                    <ul>
                      <li><FaShoppingCart className={styles.listIcon} />E-commerce Websites</li>
                      <li><FaLandmark className={styles.listIcon} />Landing Pages</li>
                      <li><FaUserCircle className={styles.listIcon} />Portfolio Websites</li>
                      <li><FaSchool className={styles.listIcon} />School Management Systems</li>
                    </ul>
                  </div>
                </div>

                <div className={styles.valueSection}>
                  <p>
                    Whether you need a brand-new site or want to bring your Figma designs to life, I ensure pixel-perfect execution and a seamless user experience.
                  </p>
                  <p className={styles.callToAction}>
                    Let's turn your vision into a fully functional digital product – together.
                  </p>
                </div>

                <div className={styles.strengthsSection}>
                  <h4>
                    <FaRocket className={styles.sectionIcon} />
                    Why Choose Me:
                  </h4>
                  <ul>
                    <li><FaCode className={styles.listIcon} />Clean, maintainable code</li>
                    <li><FaLaptopCode className={styles.listIcon} />Performance-focused development</li>
                    <li><FaTools className={styles.listIcon} />Deep SEO knowledge</li>
                    <li><FaRocket className={styles.listIcon} />Excellent communication & reliable delivery</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className={styles.details}>
              <motion.div 
                className={styles.detailGroup}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25 }}
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
                transition={{ duration: 0.25, delay: 0.05 }}
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
                transition={{ duration: 0.25, delay: 0.1 }}
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
                <FaRocket className={styles.btnIcon} />
                Hire Me
              </motion.a>
              <motion.a
                href="/resume.pdf"
                className={`btn ${styles.resumeBtn}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <FaDownload className={styles.btnIcon} />
                Download Resume
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
