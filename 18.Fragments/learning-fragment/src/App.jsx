import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";

function App() {
  let foodItems = ["Dal", "Green vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems}/>
      <FoodItems items={foodItems}/>
    </>
  );
}

export default App;
