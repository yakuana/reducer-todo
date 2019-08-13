import React from 'react';

const TodoCard = ({props}) => {
    return (
        <div>
            <h2>{props.item}</h2>
        </div>
    );
}

export default TodoCard; 