import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import CreateContextProvider from "./store/todo-item-store";
import Card from "./components/Card";



function App() {
  return (
    <CreateContextProvider>
      
      <center className="todo-container">
        <Card>
          <AppName />
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </Card>
      </center>
      </CreateContextProvider>
  );
}

export default App;
