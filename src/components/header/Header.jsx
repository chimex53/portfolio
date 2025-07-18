import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Header.module.css'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className={styles.logo}
        >
          Ugwu Chimezie
        </motion.h1>

        <div className={styles.rightSection}>
          <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
            <ul className={styles.navList}>
              {['home', 'about', 'skills', 'portfolio', 'contact'].map((item) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className={styles.navItem}
                >
                  <Link to={item === 'home' ? '/' : `/${item}`} onClick={() => setIsMenuOpen(false)}>
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>

          <ThemeToggle />
          
          <button className={styles.menuBtn} onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
