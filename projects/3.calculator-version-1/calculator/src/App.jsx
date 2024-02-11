import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styles from "./App.module.css";
import Display from "./components/display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonsContainer />
    </div>
  );
}

export default App;
