import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";

import "./App.css";
import TodoItem from "./components/TodoItem";

function App() {
  const todoItems = [
    {
      todoname: "first todo",
      dueDate: "12/02/2024",
    },
    {
      todoname: "second todo",
      dueDate: "14/02/2024",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AppTodo />
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem todoName={item.todoname} todoDate={item.todoDate} />
        ))}
      </div>
    </center>
  );
}

export default App;
