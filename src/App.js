import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";
import TodoList from "./TodoList/TodoList";

function App() {
  const [result, setResult] = useState(0);

  const plus = () => {
    setResult(result + 1);
  };

  const minus = () => {
    setResult(result - 1);
  };

  const clear = () => {
    setResult(0);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Button text="-" className="minus" onClick={minus} />
        <div className="result">
          <span>{result}</span>
        </div>
        <Button text="+" className="plus" onClick={plus} />
        <Button
          text="clear"
          // style={{ width: "50px" }}
          className="clear"
          onClick={clear}
        />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
