import { useContext } from "react";
import { MdAutoDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

function TodoItem() {
  const { todoItems } = useContext(TodoItemsContext);
  const { deleteItem } = useContext(TodoItemsContext);
  console.log("todoItems33344", todoItems);
  return (
    <div class="container text-center">
      {todoItems.map((item) => (
        <div class="row kg-row">
          <div class="col-4">{item.todoName}</div>
          <div class="col-4">{item.dueDate}</div>
          <div class="col-2">
            <button
              type="button"
              class="btn btn-danger kg-btn"
              onClick={() => deleteItem(item.todoName)}
            >
              <MdAutoDelete />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;
