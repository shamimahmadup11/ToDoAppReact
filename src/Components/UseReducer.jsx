import { useReducer } from "react";

const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      if (state.count <= 0) {
        return state;
      }
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "increment" });
  };

  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  
  const reset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Count: {state.count}</h1>
      <div className="space-x-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={increment}
        >
          +
        </button>
        <button 
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-700"
          onClick={reset}
        >
          Reset
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
