import React from 'react'
import PropTypes from 'prop-types';


export default function TodoItem({todo, markComplete, deleteTodo}) {
    return (
        <div style={getStyle(todo.completed)}>
            <p> 
                <input type="checkbox" onChange={() => markComplete(todo.id)}/>
                &nbsp; 
                {todo.title}
                <button style={btnStyle} onClick={() => deleteTodo(todo.id)}>x</button>
                </p>
        </div>
    )
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

const getStyle = (completed) => {
    return({ 
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: completed ? 'line-through' : 'none'
    })
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
 }
