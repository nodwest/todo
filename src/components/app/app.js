import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import './app.css';
import TodoForm from '../todo-form'


export default class App  extends Component {
  // MAX ID это counter для массива newItam
  maxId = 1;
  
  state = {
     todoData : [
       this.createTodoItem('Drink Coffee'),
       this.createTodoItem('Build React App'),
       this.createTodoItem('Have a lunch'),

    ],

    term: '',
    filter: 'all' //active , all , done
    
  }

  createTodoItem(label) {
    return {
        label,
        important: false,
        done: false,
        id : this.maxId++
       }
    }
  

// Удаление Item из Todo-List
  deleteItem = (id) => {
    this.setState( ({todoData}) => {
        const idx = todoData.findIndex((el) => el.id === id);
        // console.log(idx);

        const newArray = [...todoData.slice(0, idx), ...todoData.slice (idx + 1)];

        return {
          todoData: newArray
        };
    });

 };

// Добавление Item в Todo-List 
 addItem = (text) => {
//  Генерация нового Arr 
   const newItam = this.createTodoItem(text);

    this.setState( ({todoData}) => {
      const newArray = [
        ...todoData,
        newItam
      ];
       
      
       return {
        todoData: newArray
      }
    });
 }

// Добавление состояния Imporntant and Done
onToggleDone = (id) => {
  this.setState( ({todoData}) => {
    //получение id эл старого масива на которого нажали
    const idx = todoData.findIndex((el) => el.id === id);
    const oldItem = todoData[idx];
    //изменяем свойство done на противоположное 
    const newItem = {...oldItem, done: !oldItem.done};
    // берем эл массива с 0 до измнененного , добавляем новый элемент, и оставшуюся часть эл массива
    const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice (idx + 1)]
  
    return {
      todoData: newArray
    }

  });

}

// Функция для изменения событиый done or Important
toggleProperty = (arr, id , nameProp) => {
  const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [nameProp]: !oldItem[nameProp]};
    return [...arr.slice(0, idx), newItem, ...arr.slice (idx + 1)]
}


onToggleImporntant = (id) => {
  this.setState( ({todoData}) => {
    return {
      // вызываем функцию toggleProperty 
      todoData: this.toggleProperty(todoData, id , 'important')
    }
  }); 
}

// Передаем значение Input с search-panel в App.js  
searchItem = (inputValue) => {
  this.setState({ term: inputValue });
}
 
// Создаем func для фильтрации items arr Todo 
search(items ,term) {
  if(term.length === 0) {
    return items;
  }
  
  return items.filter((item) => {
    return item.label.toLowerCase()
    .indexOf(term.toLowerCase()) > -1;
  })
}

// Filter for btn app-header
  filter(items, filter) {
    switch(filter) {
      case 'all' :
        return items
      case 'active':
        return items.filter( (item) => !item.done);
      case 'done': 
        return items.filter( (item) => item.done);
      default: 
       return items
  }
    }

    filterChange = (filter) => {
      this.setState({filter})
    }

  

  render() {
  const {todoData , term, filter} = this.state;
  
  const doneCount = todoData.filter(item => item.done).length;
  const doCount =  todoData.filter(item => !item.done).length;

  const visibleItems = this.filter(this.search(todoData, term), filter); 
  

    return (
      <div className = 'container app-css'>
        <AppHeader mydo={doCount} mydone={doneCount} />
        <SearchPanel filter={filter} searchItem= {this.searchItem} filterChange={this.filterChange} />
        <TodoList todos = {visibleItems}
         onDelete={ this.deleteItem } 
         onToggleDone = {this.onToggleDone}
         onToggleImporntant = {this.onToggleImporntant}
        />
         <TodoForm 
          addItem = {this.addItem}
         />
    </div>
    )
  }
  
  }
  
  
  

