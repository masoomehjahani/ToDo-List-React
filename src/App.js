import "./App.css";
import React from "react";
import TodoApp from "./component/TodoApp";

const App = () => {
    return ( 
        <div className="App">
            <h1>to do list mastan</h1>
        <TodoApp/>
        </div>
     );
}
 
export default App;

// todoApp : parent all of component =>todos
//  todoForm : input , button from user =>add todo
// todoList: map.todos