import { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

function AddTodo() {
  const { addNewItem } = useContext(TodoItemsContext);
  console.log("Context Value:", addNewItem); // Log the context value

  const todoNameElement = useRef(null);
  const dueDateElement = useRef(null);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    addNewItem(todoName, dueDate);
    // Clear input fields after adding todo
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
  };

  return (
    <div className="container text-center">
      <form onSubmit={handleAddTodo} className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-btn">
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
