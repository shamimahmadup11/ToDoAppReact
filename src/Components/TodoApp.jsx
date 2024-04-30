import "../App.css";
import { useState } from "react";

const ToDoApp = () => {
  const [searchText, setSearchText] = useState("my text");
  const [todoData, setTodoData] = useState([]);
  function inputHandler(e) {
    setSearchText(e.target.value);
  }
  function handleButton() {
    setTodoData([...todoData, searchText]);
    setSearchText("");
  }
 
  function removeList(index) {
    const updateData = [...todoData];
    updateData.splice(index, 1);
    setTodoData(updateData);
  }

  return (
    <div className="w-screen flex flex-col justify-center align-middle gap-16 m-12">
      <h1 className="text-center text-2xl font-bold">TodoList</h1>
      <div className="w-screen flex justify-center align-middle">
        <input
          className="h-12 w-1/3 bg-slate-600 rounded-md"
          type="text"
          value={searchText}
          onChange={inputHandler}
        />
      </div>
      <div className="w-screen flex justify-center align-middle">
        <button
          className="h-14 w-32 bg-green-600 rounded-md"
          onClick={handleButton}
        >
          Add
        </button>
      </div>
      <div className=" h-40 w-screen">
        <ol className="list-decimal text-blue-950 font-extrabold text-xl gap-5 ">
          {todoData.map((todo, index) => (
            <div
              key={index}
              className="flex justify-center items-center space-x-4"
            >
              <li className="bg-slate-600 rounded-md m-2 p-3">{todo}</li>
              <button
                className="h-14 w-28 bg-green-600 rounded-md "
                onClick={() => removeList(index)}
              >
                Remove
              </button>
              <input type="checkbox" className="h-6 w-6" />
            </div>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoApp;
