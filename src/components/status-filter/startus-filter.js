import React, {Component} from 'react';

import './status-filter.css'




export default class StatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ]
    render() {

        const {filter , filterChange} = this.props;
        // console.log (filter);
        const buttons = this.buttons.map(({name , label}) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn-primary' : '';
            
            return (
                <button  type='radio' 
                    className = {`btn   ${clazz}`}
                    key={name}
                    onClick={() => filterChange(name)}
                >
                    {label}
                </button>
            )
        })
        return (
            <div className = 'container-search-panel-btn'>
  {buttons}
          </div>
        );
    }
}

// const StatusFilterFunc = () => {
//     return (
//         <div className = 'container-search-panel-btn'>
//             <button className = 'btn btn-primary search-btn'>All</button>
//             <button className = 'btn search-btn' >Active</button>
//             <button className = 'btn search-btn'>Done</button>
//       </div>
//     );
// }

// export default StatusFilter;