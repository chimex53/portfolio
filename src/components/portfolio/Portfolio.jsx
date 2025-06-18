import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import landingPage from '../../assets/landingpage.png'
import fleImage from '../../assets/fle.png'
import westImage from '../../assets/west.png'
import jara from '../../assets/jara.png'
import styles from './Portfolio.module.css'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Ngo Best catering services',
      description: 'A landing page designed for catrering services. It features a modern design with a focus on user experience, showcasing the services offered and providing easy navigation for potential customers.',
      image: landingPage,
      technologies: ['Reat', 'Tailwind', 'NextJs', ],
      liveLink: 'https://play.google.com/store/apps/details?id=com.igboamaka',
      githubLink: 'https://github.com/chimex53/igbo-amaka'
    },
    {
      id: 2,      title: 'Flexy Store',
      description: 'A modern e-commerce platform built with cutting-edge technologies. Features include a dynamic product catalog, secure payment processing, user authentication, wishlist functionality, shopping cart management, and order tracking. The platform offers a smooth shopping experience with responsive design and optimized performance.',
      image: fleImage,
      technologies: ['REACT', 'NODE.JS', 'MONGODB', 'STRIPE', 'REDUX'],
      liveLink: 'https://hydramail-demo.netlify.app',
      githubLink: 'https://github.com/chimex53/hydramail'
    },
    {      id: 3,
      title: 'Western Dreams Hotel',
      description: 'A modern hotel booking website with a sleek design and user-friendly interface. Features include room booking, dining reservations, special deals, and an intuitive navigation system.',
      image: westImage,
      technologies: ['REACT', 'TAILWIND CSS', 'RESPONSIVE DESIGN', 'BOOKING SYSTEM'],
      liveLink: 'https://western-dreams.netlify.app',
      githubLink: 'https://github.com/chimex53/western-dreams'
    },
    {
      id: 4,
      title: 'Jamara - Organic & Natural',
      description: 'An e-commerce platform for organic banana chips. Features include product shopping, blog section, community engagement, and a newsletter subscription system. A proudly Nigerian brand transforming organic banana chips from one simple ingredient.',
      image: jara,
      technologies: ['REACT', 'E-COMMERCE', 'PAYMENT INTEGRATION', 'RESPONSIVE DESIGN'],
      liveLink: 'https://jamaramills.com',
      githubLink: 'https://github.com/chimex53/jamara'
    }
  ]

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">
        <motion.h2 
          className={styles.portfolioTitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 10 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
        Portfolio
        </motion.h2>

        <div className={styles.projectsContainer}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <FaGithub /> View Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
              <div className={styles.projectImageWrapper}>
                <img src={project.image} alt={project.title} className={styles.projectImage} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
