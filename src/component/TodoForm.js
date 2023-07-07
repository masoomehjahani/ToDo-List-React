import react, { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
    const inputRef = useRef(null);
    useEffect (()=>{
        inputRef.current.focus();
    } ,[]);

    const [todo,setTodo] = useState(props.edit ? props.edit.text : "");

    const onchangeHalndler = (e) =>{
     setTodo(e.target.value);
    };

    const submitHandler = (e) =>{
     e.preventDefault();
     if(!todo){
       alert("enter todo");
         return;
     }
     props.submitTodo(todo);
     setTodo("");
    };

    return (
        
        <form onSubmit={submitHandler}>
            <div className="formController">
            <input
             type="text" 
             value={todo}
             onChange={onchangeHalndler}
             placeholder={props.edit ? "update value" : "add value"}
             ref={inputRef}/>
            <button className={`btn ${props.edit ? "updateTodo" : "addTodo"}`} type="submit">
                {props.edit ? "Update" : "Add"}</button>
            </div>
        </form>
    //     <form onSubmit={submitHandler}>
    //    { props.edit ? (
    //     <>
    //         <input
    //          type="text" 
    //          value={todo}
    //          onChange={onchangeHalndler}
    //          placeholder="update todo..."
    //          ref={inputRef}/>
    //         <button type="submit">Update</button>
    //     </> )
    //     : (
    //     <>
    //         <input 
    //         type="text" 
    //         value={todo} 
    //         onChange={onchangeHalndler}
    //         placeholder="add todo..."
    //         ref={inputRef}/>
    //         <button type="submit">Add</button>
    //     </>
    //     )}
    //     </form>
     );
}
 
export default TodoForm;