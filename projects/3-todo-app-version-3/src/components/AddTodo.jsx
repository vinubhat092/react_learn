import { useState } from "react";
import { MdAddBox } from "react-icons/md";

function AddTodo({ handleOnbuy }) {
  const [todoname, setTodoname] = useState("");
  const [duedate, setDuedate] = useState("");
  const handleTodoname = (event) => {
    setTodoname(event.target.value);
  };
  const handleDuedate = (event) => {
    setDuedate(event.target.value);
  };
  const handleBuybutton = () => {
    handleOnbuy(todoname, duedate);
    setDuedate("");
    setTodoname("");
  };
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-4">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoname}
            onChange={handleTodoname}
          />
        </div>
        <div class="col-4">
          <input type="date" value={duedate} onChange={handleDuedate} />
        </div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-success kg-btn"
            onClick={handleBuybutton}
          >
            <MdAddBox />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
