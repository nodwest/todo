import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {


 
    render () {
// PROPS
        const {label, onDelete, 
             onToggleDone, onToggleImporntant,
             done, important} = this.props;
  
// Условие для изменение состояния list-item
        let classNames = 'todo-list-item';
        
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important';
        }
        
        return (
            <div className= 'todo-container-span'>
                <span 
                
                    className ={classNames}
                    onClick = {onToggleDone}>  
                    { label } 
                    
                </span>
    
                 <span className = "todo-span-icon">
                    <button onClick={onToggleImporntant } 
                    className = 'btn btn-icon btn-outline-success '> <i className="bi bi-exclamation"></i></button>
                    <button onClick = { onDelete} 
                    className = 'btn btn-icon border-danger btn-outline-danger'> <i className="bi bi-trash"></i> </button>
                </span>
            </div>
        );
    }
}



