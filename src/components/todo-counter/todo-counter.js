import React from "react";
import './todo-counter.css'

const TodoCounter = ({mydo, mydone}) => {

    return (
       
            <span className='todoCounter'> {mydo} more to do; {mydone} done </span>
        
    )
}

export default TodoCounter;