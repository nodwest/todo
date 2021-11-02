import React, {Component} from "react";
import './todo-form.css';

export default class TodoForm extends Component {
    
    state = {
       label : '' 
    }

      onLabelChange = (e) => {
        this.setState({label : e.target.value})
        
      }

      onSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.label)
        this.setState({label: ''})
      }

    render() {
       

        return (
            <form
                onSubmit={this.onSubmit} 
                className='formContainer mt-2'>
                <input 
                    type="text"
                    className='form-control'
                    placeholder='What needs to be done'
                    onChange ={this.onLabelChange}
                    value= {this.state.label}
                />
            <button
               
                className=' btn btnForm btn-outline-secondary' > Add Item
            </button>
            </form>
    
        );
    }
 
}

