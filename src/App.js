import logo from "./logo.svg";
import "./App.css";

import TodoItem from "./components/TodoItem/TodoItem";
import TodoAdd from "./components/TodoAdd/TodoAdd";

function App() {
  return (
    <div className="App">
      <TodoAdd />
      <TodoItem />
    </div>
  );
}

export default App;
