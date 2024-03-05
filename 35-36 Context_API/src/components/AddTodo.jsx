import { useRef, useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({ handleOnbuy }) {
  // const [todoname, setTodoname] = useState("");
  // const [duedate, setDuedate] = useState("");
  const todoNameElement = useRef("");
  const dueDateElement = useRef("");
  const handleBuybutton = (event) => {
    event.preventDefault();
    const todoname = todoNameElement.current.value;
    const duedate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    handleOnbuy(todoname, duedate);
  };
  return (
    <div class="container text-center">
      <form onSubmit={handleBuybutton} class="row kg-row">
        <div class="col-4">
          <input
            type="text"
            placeholder="Enter todo here"
            ref={todoNameElement}
          />
        </div>
        <div class="col-4">
          <input type="date" ref={dueDateElement} />
        </div>
        <div class="col-2">
          <button class="btn btn-success kg-btn">
            <MdAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
