import React from "react";
import TodoCounter from  '../todo-counter'
import './app-header.css'

const AppHeader = ({mydo, mydone}) => {


    return (
        <div className='appHeader'> 
            <h2>My Todo List</h2>
            <TodoCounter mydo ={mydo} mydone = {mydone}/>
            
        </div>
    )
} 


export default AppHeader;