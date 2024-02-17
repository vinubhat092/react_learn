import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import { Container } from "./components/Container";
import { FoodInput } from "./components/FoodInput";

function App() {
  let foodItems = ["Dal", "Green vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems}/>
      <FoodInput />
      <FoodItems items={foodItems}/>
    </Container>
  );
}

export default App;
