import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import react,{useEffect, useState} from "react";
import Navbar from "./Navbar";

const TodoApp = () => {

const [todos,setTodos] = useState([]);

// ba entekhab select opthin age ru state ghabli filter mizadim dg miparidan
// va beheshun dastresi nadashtim pas az yek state komaki estefade kardim
const [filteredTodos,setFilterTodos] = useState([]);

const [selectedOption,setSelectedOption] = useState("All");

useEffect (() =>{
filterTodos (selectedOption.value);
} , [todos,selectedOption]);

const selectHandler =(e) =>{
    // for select option:
    // const value =e.target.value;

    setSelectedOption(e);
     filterTodos(e.value);
    };

const addTodo= (input) =>{
 const newTodo= {id:Math.floor(Math.random() * 1000) , 
    text : input,
    isCompleted: false};
 setTodos([...todos , newTodo]);
};

// const editHandler = (id,input) =>{
// const todo= todos.find((d) = > d.id = id);
// const editedTodo = todo.text = input;
// setTodos ([...todos , editedTodo]);
// }
const completeTodo = (id) =>{
    const index = todos.findIndex( (t)=> t.id === id);

    const selectedTodo = {...todos[index]};
    selectedTodo.isCompleted = !selectedTodo.isCompleted;

    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
};

const deleteTodo = (id) =>{
const filterTodo =todos.filter((t) => t.id !== id);
setTodos(filterTodo);
};

const updateTodo= (id,newValu) =>{
    const index = todos.findIndex( (t)=> t.id === id);

    const selectedTodo = {...todos[index]};
    selectedTodo.text = newValu;

    const updatedTodos = [...todos];
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
} ;

const filterTodos = (status) =>{
switch (status) {
   
    case "Completed" :
        setFilterTodos(todos.filter(t => t.isCompleted));
    break;
    case "UnCompleted" :
        setFilterTodos(todos.filter(t => !t.isCompleted));
    break;
    default:
        setFilterTodos(todos);
}
}


    return ( 
        <div className="container">
         <Navbar unCompletedTodos={todos.filter(t => !t.isCompleted).length}
         onSelect = {selectHandler}
         selectedOption = {selectedOption}/>
         <TodoForm submitTodo={addTodo}/>
         <TodoList 
         todos={filteredTodos} 
         compeletHandler={completeTodo}
         deleteHandler = {deleteTodo}
         onUpdate = {updateTodo}/>
        </div>
     );
}
 
export default TodoApp;