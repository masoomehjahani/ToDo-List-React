import React from "react";

const Todo = ({todo,onCompelet,onDelete,onEdited}) => {
    return ( 
        <div className="todo">
        <div onClick={onCompelet}
             className={todo.isCompleted ? "completed" : ""}> 
             {todo.text} 
        </div>
        <div>
          <button className="btn" onClick={onEdited} >edit</button>
          <button className="btn remove" onClick={onDelete} >delete</button>
        </div>
        </div>
     );
}
 
export default Todo;