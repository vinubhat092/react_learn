import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  let [calval, setCalval] = useState("1")
  return (
    <div className={styles.calculator}>
      <Display displayValue = {calval} />
      <ButtonsContainer />
    </div>
  );
}

export default App;
