import styles from "../styles/Home.module.css";

const CopyToClipboardButton = ({ textToCopy }) => {
    const handleCopy = () => {
      navigator.clipboard.writeText(textToCopy)
    };
  
    return (
      <button className={styles.button3} onClick={handleCopy}>COPY 📋</button>
    );
  };
  
  export default CopyToClipboardButton;