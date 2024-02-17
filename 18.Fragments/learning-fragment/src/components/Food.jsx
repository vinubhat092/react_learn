import styles from "./Food.module.css"
let Food = (props) => {
  let { foodItems } = props;
  const handlebuybutton = (event)=>{
    console.log("event",event)
    console.log(`${foodItems} is being clicked`)
  }
  return (
    <li className="list-group-item kg-name">
      <span className="kg-span">{foodItems}</span>
      <button className={`${styles.button} btn btn-info`} onClick={(event)=>handlebuybutton(event)}>buy</button>
    </li>
  );
};

export default Food;
