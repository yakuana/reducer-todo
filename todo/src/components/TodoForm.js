import React, { useState, useReducer } from 'react';

import { initialState, TodoReducer } from "../reducers/TodoReducer.js";
import TodoCard from './TodoCard.js';


const TodoForm = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState); 

    const [newTodo, setNewTodo] = useState();

    const handleChange = event => {
        setNewTitleText(event.target.value);
    };
    

    return (
        <div className="todo-form-container">
            <div className="todo-form">
                <input
                type="text"
                name="newTodo"
                value={newTodo}
                onChange={handleChange}
                />
                <button
                onClick={() =>
                    dispatch({ type: 'ADD_TODO', payload: newTodo })
                }
                >
                Add Todo 
                </button>
            </div>

            {state.todoList.map(task => <TodoCard key={task.id} props={task}/>)}
        </div>
    );

}