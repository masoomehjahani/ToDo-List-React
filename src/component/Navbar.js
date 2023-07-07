import React, { useState } from "react";
import Select from 'react-select';


const options = [
    { value: 'All', label: 'All' },
    { value: 'Completed', label: 'Completed' },
    { value: 'UnCompleted', label: 'UnCompleted' },
  ];

const Navbar = ({unCompletedTodos,onSelect,selectedOption}) => {  

if(!unCompletedTodos) return  <h3>set your todos!!</h3>
    return ( 
        <div className="nav">
        <span>{unCompletedTodos} </span>
        <h3>are not complete</h3>
<Select 
onChange={onSelect}
value = {selectedOption}
options={options}
className="select"/>
        {/* <select onChange={onSelect} value={status}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="UnCompleted">UnCompleted</option>
        </select> */}
        </div>
     );
}
 
export default Navbar;
