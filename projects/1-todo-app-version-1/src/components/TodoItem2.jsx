function TodoItem2() {
  let todoName = "go to college";
  let todoDate = "14/02/2024";
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

export default TodoItem2;
