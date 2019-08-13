import React, { useState, useReducer } from 'react';

import { initialState, TodoReducer } from "../reducers/TodoReducer.js";

const TodoForm = () => {
    const [state, dispatch] = useReducer(TodoReducer, initialState); 

    const [newTodo, setNewTodo] = useState();

    const handleChange = event => {
        setNewTodo(event.target.value);
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

            {state.todoList.map(task =>  { 
                return (
                    <div>
                        {task.completed === true ? (
                            <h2 className="add-line" onClick={() => {dispatch({ type: 'TOGGLE_COMPLETE', payload: task})}}>{task.item}</h2>
                        ) : (
                            <h2 onClick={() => {dispatch({ type: 'TOGGLE_COMPLETE', payload: task})}}>{task.item}</h2>
                        )}
                    </div>
                )}
            )}
        </div>
    );

}

export default TodoForm; 