import React from 'react';
import styles from "../styles/Home.module.css";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className={styles.card}>
      <img src={icon} alt={title} className={styles.icon} />
      <h3 className={styles.titleCard}>{title}</h3>
      <p className={styles.descriptionCard}>{description}</p>
    </div>
  );
};

export default FeatureCard;