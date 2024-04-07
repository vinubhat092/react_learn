import styles from "./ButtonContainer.module.css";
const ButtonsContainer = ({ handleButtonclick }) => {
  let buttonList = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonList.map((button) => (
        <button
          className={styles.button}
          onClick={() => handleButtonclick(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
