import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import './App.css';
function App() {
  const todoItems=[{
    name:"buy milk",
    dueDate:"4/10/2023"
  },
 {
    name:"goto collrge",
    dueDate:"4/10/2023"
 }, 
 {
    name:"Learn react",
    dueDate:"4/10/2023"
 }] 
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <TodoItems todoItems={todoItems}></TodoItems>
     
    </center>
  );
}

export default App;
