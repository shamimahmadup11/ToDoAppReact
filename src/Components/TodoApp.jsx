import "../App.css";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import ListCompnnets from "./ListCompnnets";

const InitialState = [
  {
    id: uuid(),
    task: "work the assignment",
    isComplete: false,
    timeTemp: Date.now(),
  },
];

const ToDoApp = () => {
  const [searchText, setSearchText] = useState("Write Todo");
  const [todoData, setTodoData] = useState(InitialState);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  function inputHandler(e) {
    setSearchText(e.target.value);
  }

  function editInputHandler(e) {
    setEditText(e.target.value);
  }

  function removeList(id) {
    const updateData = todoData.filter((task) => task.id !== id);
    setTodoData(updateData);
  }

  function editHandler(id, currentText) {
    setEditId(id);
    setEditText(currentText);
  }

  function saveEdit(id) {
    const updatedData = todoData.map((task) => {
      if (task.id === id) {
        return { ...task, task: editText };
      }
      return task;
    });
    setTodoData(updatedData);
    setEditId(null);
    setEditText("");
  }

  const List = () => {
    setTodoData([
      ...todoData,
      {
        id: uuid(),
        task: searchText,
        isComplete: false,
        timeTemp: Date.now(),
      },
    ]);
    setSearchText("");
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-center text-2xl font-bold mt-8 mb-4">TodoList</h1>
      <div className="flex justify-center mb-4">
        <input
          className="h-12 w-full md:w-1/3 bg-slate-400 rounded-md px-4 text-2xl"
          type="text"
          placeholder="Add a new todo..."
          value={searchText}
          onChange={inputHandler}
        />
      </div>
      <div className="flex justify-center mb-4">
        <button className="h-14 w-32 bg-green-600 rounded-md" onClick={List}>
          Add
        </button>
      </div>
      <div className="w-full md:w-2/3 mx-auto">
        <ol className="list-decimal text-black font-extrabold  text-lg">
          {todoData.length === 0
            ? "Please Add Todo ... "
            : todoData.map((task) => (
                <li key={task.id} className="mb-2">
                  {editId === task.id ? (
                    <div className="flex">
                      <input
                        className="h-10 w-full bg-slate-200 rounded-md px-2"
                        type="text"
                        value={editText}
                        onChange={editInputHandler}
                      />
                      <button
                        className="ml-2 bg-blue-500 text-white rounded-md px-4"
                        onClick={() => saveEdit(task.id)}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-between">
                      <span>{task.task}</span>
                      <div>
                        <button
                          className="bg-yellow-500 text-white rounded-md px-4 mr-2"
                          onClick={() => editHandler(task.id, task.task)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white rounded-md px-4"
                          onClick={() => removeList(task.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoApp;
