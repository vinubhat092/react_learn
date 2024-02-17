import styles from "./FoodInput.module.css";

export const FoodInput = () => {
  const handleOnchange = (event) => {
    console.log(event.target.value);
  };
  return (
    <input
      type="text"
      placeholder="enter here"
      className={styles.foodInput}
      onChange={handleOnchange}
    />
  );
};
