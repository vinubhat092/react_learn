import { useState } from "react";
import styles from "./Food.module.css";
let Food = ({ foodItems }) => {
  // const handlebuybutton = (event) => {
  //   console.log("event", event);
  //   console.log(`${foodItems} is being clicked`);
  // };
  let [isbought, setIsbought] = useState(false);
  const handlebuybutton = () => {
    setIsbought(true);
  };

  return (
    <li className={`list-group-item kg-name ${isbought ? "active" : ""}`}>
      <span className="kg-span">{foodItems}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handlebuybutton}
      >
        buy
      </button>
    </li>
  );
};

export default Food;
