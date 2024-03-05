const WelcomeMessage = ({ todoItems }) => {
  return todoItems.length === 0 && <div>Enjoy your day</div>;
};

export default WelcomeMessage;
