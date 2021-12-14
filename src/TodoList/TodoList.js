import { useState } from "react";
import "./TodoList.css";
import "../Components/Button";

const TodoList = () => {
  const getListInputValue = localStorage.getItem("todosList") || "[]";
  // console.log(getListInputValue);
  const [inputValue, setInputValue] = useState("");
  const [listInputValue, setListInputValue] = useState(
    JSON.parse(getListInputValue)
  );

  const addListInputValue = () => {
    if (!listInputValue.find(({ value }) => value === inputValue)) {
      setListInputValue([
        { value: inputValue, done: false },
        ...listInputValue,
      ]);
    } else {
      alert("Already exists !");
    }
    localStorage.setItem(
      "todosList",
      JSON.stringify([{ value: inputValue }, ...listInputValue])
    );
  };

  const changeInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const deleteLiElement = (index) => {
    listInputValue.splice(index, 1);
    setListInputValue([...listInputValue]);
    localStorage.setItem("todosList", JSON.stringify(listInputValue));
  };

  const doneLiElement = (index) => {
    listInputValue[index].done = !listInputValue[index].done;
    setListInputValue([...listInputValue]);
    localStorage.setItem("todosList", JSON.stringify(listInputValue));
  };

  return (
    <div className="podlozhka">
      <div className="blackboard">
        <input
          type="text"
          placeholder="Input task here..."
          onChange={(e) => changeInputValue(e)}
        />
        <ul>
          {listInputValue.map((object, index) => (
            <li key={index} className={`${object.done ? "done-success" : ""}`}>
              {object.value}
              {""}
              <button onClick={() => deleteLiElement(index)}>Del</button>
              <button
                onClick={() => doneLiElement(index)}
                className={`${object.done && "button-success"}`}
              >
                Done
              </button>
            </li>
          ))}
        </ul>
        <div className="mainButton">
          <button className="mainAdd" onClick={addListInputValue}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
