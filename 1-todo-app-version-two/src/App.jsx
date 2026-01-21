import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    { name: "Buy Milk", dueDate: "10/12/2006" },
    { name: "Go to clg", dueDate: "10/12/2006" },
    { name: "Study React", dueDate: "10/12/2006" },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
