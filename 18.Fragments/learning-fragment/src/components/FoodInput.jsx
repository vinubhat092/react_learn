import styles from "./FoodInput.module.css";

export const FoodInput = ({ handleKeydown }) => {
  return (
    <input
      type="text"
      placeholder="enter here"
      className={styles.foodInput}
      onKeyDown={handleKeydown}
    />
  );
};
