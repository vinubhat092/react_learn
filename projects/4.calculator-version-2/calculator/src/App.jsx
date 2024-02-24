import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  let [calval, setCalval] = useState("");
  const handleButtonclick = (buttonText) => {
    if (buttonText === "C") {
      setCalval("");
    } else if (buttonText === "=") {
      let result = eval(calval);
      setCalval(result);
    } else {
      let finalVal = calval + buttonText;
      setCalval(finalVal);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calval} />
      <ButtonsContainer handleButtonclick={handleButtonclick} />
    </div>
  );
}

export default App;
