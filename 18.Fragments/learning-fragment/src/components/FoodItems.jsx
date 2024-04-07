import { useState } from "react";
import Food from "./Food";

const FoodItems = ({ items }) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Food key={item} foodItems={item} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
