import Food from "./Food";

const FoodItems = ({items}) => {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Food key={item} foodItems={item} handlebuybutton = {()=> console.log(`${item} clicked`)} />
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
