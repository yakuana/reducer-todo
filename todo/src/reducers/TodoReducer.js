// Todo List Reducer 

export const initialState = { 
    todoList: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        
        {
            item: 'Study Chinese',
            completed: false,
            id: 389298758
        }, 

        {
            item: 'Look for a new backpack',
            completed: false,
            id: 38929875
        }, 

    ]
};


export const TodoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return { 
                todoList: [
                    ...state.todoList, 
                    {
                        item: action.payload,
                        completed: false, 
                        id: Date.now()
                    }
                ]
            }

        case "TOGGLE_COMPLETE":
            return {
                todoList: state.todoList.map(todoObject => {

                    if (todoObject.id === action.payload.id) {
                        // console.log("payload object", action.payload, action.payload.completed);
                        // console.log("todoObject", todoObject); 
                        // console.log({...action.payload, completed: true})
                        return {
                            ...action.payload, 
                            completed: !todoObject.completed
                        }
                    } else {
                        return todoObject
                    }
                       
                })
            }
        case "REMOVE_ITEM": 
            return {
                todoList: state.todoList.filter(todoObject =>
                    todoObject.id !== action.payload.id 
                )
            }
        case "REMOVE_COMPLETED":
            return {
                todoList: state.todoList.filter(todoObject => 
                    todoObject.completed !== true
                )
            }
        default: return state 
    }
   
};