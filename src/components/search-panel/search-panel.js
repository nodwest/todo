import React, {Component} from "react";
import './search-panel.css'
import StatusFilter from "../status-filter";


const searchText = 'Type here to search';
const searchStyle = {
  fontSize: '20px'
};





export default class  SearchPanel extends Component {
  state = {
    inputValue : ''
  }


  searchItem = (e) => {
    const inputValue =  e.target.value;
    this.setState({inputValue :inputValue });
  
    this.props.searchItem(inputValue);

  }
  render() {
   const {filter , filterChange} = this.props;
    return (
      <div className = 'container-surch-panel'>
        <input type="text"
          className = "form-control input-search-panel" 
          style = {searchStyle}
          placeholder={searchText} 
          onChange={this.searchItem}
          value={this.state.inputValue}
        />
          <StatusFilter filterChange={filterChange} filter={filter} />
        </div>
    );
  };
}


