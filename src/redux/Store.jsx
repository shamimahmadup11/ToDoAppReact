import { createStore, combineReducers } from "@reduxjs/toolkit";

const initialCounterState = { count: 10 };

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + 1 };
        case "decrement":
            return { ...state, count: state.count - 1 };
        case "reset":
            return { ...state, count: 0 };
        default:
            return state;
    }
};

const initialTodoState = [{ task: 'first task', des: "des", id: 1, isCompleted: false }];

// slices
const todoReducer = (state = initialTodoState, action) => {
    switch (action.type) {
        case "addTodo":
            return [...state, { task: action.payload.task, des: action.payload.des, id: state.length + 1, isCompleted: false }];
        case "removeTodo":
            return state.filter(todo => todo.id !== action.payload);
        case "markAsComplete":
            return state.map(todo => todo.id === action.payload ? { ...todo, isCompleted: true } : todo);
        case "editTodo":
            return state.map(todo => 
                todo.id === action.payload.id 
                ? { ...todo, task: action.payload.task, des: action.payload.des } 
                : todo
            );
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todoReducer
});

const store = createStore(rootReducer);

export default store;
