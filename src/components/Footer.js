import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()}
        <a href="https://ssanjua.vercel.app" target="_blank"> ssanjua.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;