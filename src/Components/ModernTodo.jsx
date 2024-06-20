import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModernTodo = () => {
    const [todo, setTodo] = useState("");
    const [des, setDes] = useState("");
    const dispatch = useDispatch();

    const addTodo = (e) => {
        e.preventDefault();
        if (todo.trim() === "") return; 
        dispatch({ type: "addTodo", payload: { task: todo, des: des } });
        setTodo("");  
        setDes("");
        toast("Task Added!"); // notify user that task has been added
    };

    return (
        <div className="max-w-md mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white rounded-md shadow-md mt-10">
            <h2 className="text-lg font-bold mb-4">Add New Task</h2>
            <form onSubmit={addTodo}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                  
                    <input
                        type="text"
                        id="title"
                        value={todo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter task title"
                        onChange={(e) => setTodo(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description (optional)
                    </label>
                 
                    <textarea
                        id="description"
                        value={des}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter task description"
                        onChange={(e) => setDes(e.target.value)}
                    />
                </div>
                <div className="flex justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Task
                    </button>
                    <Link to="/tasklist">
                        <button
                            type="button"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Tasks List
                        </button>
                    </Link>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default ModernTodo;