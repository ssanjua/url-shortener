import styles from "../styles/Home.module.css";

const ResetButton = ({ onReset }) => {
    return (
      <button onClick={onReset} className={styles.button2}>
        RESET
      </button>
    );
  };
  
  export default ResetButton;