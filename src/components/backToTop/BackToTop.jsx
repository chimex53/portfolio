import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './BackToTop.module.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const footer = document.getElementById('footer');
    if (footer) {
      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsVisible(footerPosition <= windowHeight);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          className={styles.backToTop}
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default BackToTop;
