import styles from "../styles/Home.module.css";

const GoToLinkButton = ({ url }) => {
    return (
      <button
        onClick={() => window.open(url, '_blank')}
        className={styles.button}
      >
        GO TO 🔗
      </button>
    );
  };
  
  export default GoToLinkButton;