import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMessage = () => {
  const {todoItems}= useContext(TodoItemsContext)
  return todoItems.length === 0 && <div>Enjoy your day</div>;
};

export default WelcomeMessage;
