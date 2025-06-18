/**
 * Skills section component that displays technical expertise and proficiency levels
 * using animated progress bars and icons.
 */
import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
} from 'react-icons/fa'
import { SiTailwindcss } from 'react-icons/si'
import styles from './Skills.module.css'

const Skills = () => {
  // Skills data with icons and proficiency levels
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 100 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 90 },
    { name: 'React', icon: <FaReact />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 88 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
  ]

  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        {/* Section title with fade-in animation */}
        <motion.h2 
          className="section__title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>

        {/* Skills grid with animated cards */}
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={styles.skillCard}
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {/* Skill icon */}
              <div className={styles.skillIcon}>
                {skill.icon}
              </div>
              
              {/* Skill name */}
              <h3>{skill.name}</h3>

              {/* Animated progress bar */}
              <div className={styles.progressBar}>
                <motion.div
                  className={styles.progress}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              </div>
              
              {/* Proficiency level percentage */}
              <span className={styles.level}>{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills