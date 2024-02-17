import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import { Container } from "./components/Container";
import { FoodInput } from "./components/FoodInput";

function App() {
  let [foodItems, setFoodItems] = useState([
    "Sabji",
    "Green vegetables",
    "Roti",
  ]);
  const Onkeydown = (event) => {
    if (event.key === "Enter") {
      console.log(event);
      let newfood = event.target.value;
      let newItems = [...foodItems, newfood];
      setFoodItems(newItems)
    }
  };
  return (
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <FoodInput handleKeydown={Onkeydown} />
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
