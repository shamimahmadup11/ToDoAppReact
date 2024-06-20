import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos)

  const dispatch = useDispatch();
 
  const handleMarkAsComplete = (id) => {
    dispatch({ type: "markAsComplete", payload: id });
  };

  const handleDeleteTask = (id) => {
    dispatch({ type: "removeTodo", payload: id });
  };

  const handleEditTask = (id) => {
    const newTask = prompt("Enter new task:");
    const newDes = prompt("Enter new description:");
    if (newTask && newDes) {
      dispatch({ type: "editTodo", payload: { id, task: newTask, des: newDes } });
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-8 pt-12 md:p-12 lg:p-20 bg-white rounded-md shadow-md mt-20">
      <h2 className="text-2xl font-bold mb-6">Task List</h2>
      <ul className="animate-fade-in">
        {todos.map((todo) => (
          <li key={todo.id} className="mb-4 shadow-md h-24  w-full p-5">
            <div className="flex justify-between">
              <div>
                <span className={todo.isCompleted ? "line-through" : ""}>
                  {todo.task}
                </span>
                <p className="text-sm text-gray-600">{todo.des}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded h-12 w-32"
                  onClick={() => handleMarkAsComplete(todo.id)}
                >
                  Completed
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold h-12 w-32 rounded"
                  onClick={() => handleDeleteTask(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold h-12 w-32 rounded"
                  onClick={() => handleEditTask(todo.id)}
                >
                  Edit
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/modernTodo">
        <button
          type="submit"
          className="bg-blue-500 mt-6 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
        >
          Add New Task
        </button>
      </Link>
    </div>
  );
};

export default TaskList;