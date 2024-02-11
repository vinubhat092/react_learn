const ErrorMessage = ({items}) => {
//   let foodItems = [];
  return <>{items.length === 0 && <h3>Am still hungry</h3>}</>;
};

export default ErrorMessage;
