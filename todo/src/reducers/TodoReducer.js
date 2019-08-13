// Todo List Reducer 

export const intitailState = { 
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
            id: 3892987589
        }, 

    ]
};


export const TodoReducer = (state, action) => {
    switch(action.type) {
        case "ADD_TODO":
            return {
                ...state, 
                todoList: [
                    ...todoList, 
                    {
                        item: action.item,
                        completed: false, 
                        id: Date.now()
                    }
                ]
            }
            
        case "REMOVE_TODO":
                return {
                    ...state,
                    todoList: state.todoList.filter(todoObject => todoObject.id !== action.id)
                }

        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todoList: state.todoList.map(todoObject => {
                    if (todoObject.id === action.id) {
                      return {
                          ...todoObject, 
                          completed: !todoObject.completed
                      }
                    }
                    return todoObject   
                })
            }
    }
   
};