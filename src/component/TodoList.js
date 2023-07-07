import react,{useState} from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";


const TodoList = ({todos,compeletHandler,deleteHandler,onUpdate}) => {
    
    const [edit, setEdit] = useState({id:null, text:"" , isCompleted:false});
    
    const editTodo= (newValu)=>{
        onUpdate(edit.id , newValu);
        setEdit({id:null, text:""});
    }
    const renderTodos = () =>{
        
        if (todos.lenght === 0 ) return "add som todo";
        return(todos.map((todo) => {
            return (
             <Todo 
              todo={todo}
              key={todo.id} 
              onCompelet = {() => compeletHandler(todo.id)}
              onDelete = {() => deleteHandler(todo.id)}
              onEdited = {() => setEdit(todo)}
              />
              
            );
        
            }));
          
    };
  
   return(<div>{edit.id ? <TodoForm submitTodo={editTodo} edit={edit}/> : renderTodos()}</div>);
}
 
export default TodoList;