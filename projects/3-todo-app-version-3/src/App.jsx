import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";
import TodoItem from "./components/TodoItem";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItem] = useState([]);
  const handleOnbuy = (todoname, duedate) => {
    setTodoItem((currValue) =>[
      ...currValue,{todoname,duedate}
    ]);
  };
  const onDeletebutton = (todoName) =>{
    const removeItem = todoItems.filter(item => item.todoname !== todoName) 
    console.log(`deleted item ${todoName}`)
    setTodoItem(removeItem);
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleOnbuy={handleOnbuy} />
      <WelcomeMessage todoItems={todoItems}/> 
      <div className="item-container">
        {todoItems.map((item) => (
          <TodoItem key={item} todoName={item.todoname} todoDate={item.duedate} handleDeletebutton={onDeletebutton}/>
        ))}
      </div>
    </center>
  );
}

export default App;
