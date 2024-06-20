import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const TaskList = () => {
  const todos = useSelector((state) => state.todos);
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
    <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white rounded-md shadow-md mt-10">
      <h2 className="text-lg font-bold mb-4">Task List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-2">
            <div className="flex justify-between">
              <div>
                <span className={todo.isCompleted ? "line-through" : ""}>
                  {todo.task}
                </span>
                <p className="text-sm text-gray-600">{todo.des}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded h-10 w-24"
                  onClick={() => handleMarkAsComplete(todo.id)}
                >
                  Completed
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold h-10 w-24 rounded"
                  onClick={() => handleDeleteTask(todo.id)}
                >
                  Delete
                </button>
                <button
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold h-10 w-24 rounded"
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
          className="bg-blue-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add New Task
        </button>
      </Link>
    </div>
  );
};

export default TaskList;
