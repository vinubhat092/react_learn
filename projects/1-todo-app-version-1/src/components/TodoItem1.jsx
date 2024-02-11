function TodoItem1() {
  let todoName = "buy milk";
  let todoDate = "12/02/2024";
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-4">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
