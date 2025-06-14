import React from 'react'
import { motion } from 'framer-motion'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js',
      image: '/projects/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productive task management application with real-time updates',
      image: '/projects/task-app.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application showing current and forecast weather data',
      image: '/projects/weather.jpg',
      technologies: ['JavaScript', 'Weather API', 'CSS3'],
      liveLink: '#',
      githubLink: '#'
    }
  ]

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <motion.h2 
          className="section__title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Portfolio
        </motion.h2>

        <div className={styles.projectsGrid}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectLinks}>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">
                    Source Code
                  </a>
                </div>
              </div>
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
