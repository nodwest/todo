import React from "react";
import TodoListItem from "./../todo-list-item";
import './todo-list.css'

const TodoList = ({todos, onDelete, onToggleDone, onToggleImporntant}) => {
    
    const elements = todos.map( (item) => {
       
    const {id, ...itemProps} = item;
        return (
        <li className = "list-group-item todo-list-item " key = {id}> 
      
            <TodoListItem 
            {...itemProps} 
            onDelete = { () => onDelete(id)}
            onToggleDone = { () => onToggleDone(id)}
            onToggleImporntant = {() => onToggleImporntant(id)}
            /> 
      </li>
       ); 
    })

    return(
        <ul className = "list-group todo-list">
            {elements}
        </ul>
    );
  }

export default TodoList;