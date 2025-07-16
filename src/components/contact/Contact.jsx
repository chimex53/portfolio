import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import styles from './Contact.module.css'

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'ugwuchimezie3@gmail.com',
      link: 'mailto:ugwuchimezie3@gmail.com?subject=Project%20Inquiry&body=Hello%20Chimezie,%0D%0A%0D%0AI%20am%20reaching%20out%20regarding%20a%20potential%20project.%0D%0A%0D%0AProject%20Details:%0D%0A%0D%0ABest%20regards,'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+23407061954752',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      content: 'City, Country',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <FaGithub />,
      title: 'GitHub',
      content: '@yourusername',
      link: 'https://github.com/yourusername'
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      content: 'Your Name',
      link: 'https://linkedin.com/in/yourusername'
    },
    {
      icon: <FaTwitter />,
      title: 'Twitter',
      content: '@yourusername',
      link: 'https://twitter.com/yourusername'
    }
  ]

  const handleClick = (link) => {
    if (link) {
      window.location.href = link;
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>
        <div className={styles.content}>
          <div className={styles.contactGrid}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={styles.contactCard}
                onClick={() => handleClick(info.link)}
                style={{ cursor: info.link ? 'pointer' : 'default' }}
              >
                <div className={styles.iconWrapper}>
                  {info.icon}
                </div>
                <div className={styles.infoContent}>
                  <h3>{info.title}</h3>
                  <p className={info.link ? styles.linkText : ''}>
                    {info.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.socialGrid}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <div className={styles.iconWrapper}>
                  {social.icon}
                </div>
                <div className={styles.infoContent}>
                  <h3>{social.title}</h3>
                  <p>{social.content}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
