let Food = (props) => {
  let { foodItems } = props;
  return (
    <li className="list-group-item kg-name">
      <span className="kg-span">{foodItems}</span>
    </li>
  );
};

export default Food;
