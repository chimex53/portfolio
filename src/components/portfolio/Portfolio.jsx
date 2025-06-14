import React from 'react'
import { motion } from 'framer-motion'
import landingPage from '../../assets/landingpage.png'
import fleImage from '../../assets/fle.png'
import westImage from '../../assets/west.png'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Landing Page created for Ngo best catering services',
      description: 'A sleek and responsive landing page designed with modern UI/UX principles',
      image: landingPage,
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
      liveLink: 'https://ngo-best.netlify.app/',
      githubLink: 'https://github.com/chimex53/landing-page'
    },
    {
      id: 2,
      title: 'FLE E-learning Platform',
      description: 'An interactive e-learning platform with course management and student tracking',
      image: fleImage,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      liveLink: 'https://fle-learning.herokuapp.com',
      githubLink: 'https://github.com/yourusername/fle-platform'
    },
    {
      id: 3,
      title: 'West Commerce',
      description: 'A feature-rich e-commerce platform with secure payment integration',
      image: westImage,
      technologies: ['Next.js', 'Stripe', 'Supabase', 'Tailwind CSS'],
      liveLink: 'https://west-commerce.vercel.app',
      githubLink: 'https://github.com/chimex53/landing-page'
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
