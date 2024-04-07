import { MdAutoDelete } from "react-icons/md";

function TodoItem({ todoName, todoDate, handleDeletebutton }) {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger kg-btn"
            onClick={() => handleDeletebutton(todoName)}
          >
            <MdAutoDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
