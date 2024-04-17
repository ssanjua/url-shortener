import styles from "../styles/Home.module.css";

const Input = ({ value, onValueChange, minLength }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onValueChange}
      placeholder="Your URL"
      minLength={minLength}
      className={styles.input} 
      required
    />
  );
};

export default Input;