import { useState, useEffect } from 'react';

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleAdd = () => {
     if(input.trim()==="") {
            return;
        }
            setTodo([...todo, input.trim()])
            setInput("")
            };

    const handleDelete = (taskToDelete) => {
        const updatedTodo = todo.filter((task) => task !== taskToDelete);
        setTodo(updatedTodo);

    }

    useEffect(()=>{
        const savedTodos = localStorage.getItem("todos"); //Retrieve

        if (savedTodos!==null){
        const parsedTodos= JSON.parse(savedTodos); //Convert to array
        setTodo(parsedTodos);  // Give it to react
        }

        setIsLoaded(true)
    }, []);
    
    useEffect(()=>{
        if(isLoaded){
        const todoString = JSON.stringify(todo) //Convert to string
        localStorage.setItem("todos", todoString) //Store the string inside todos
        }
    }, [todo, isLoaded])
   

    

    return ( 
        <div>
            <h2>My Todo List</h2>
            <form onSubmit={(e)=>{
                e.preventDefault();
                handleAdd();
            }}>
            <input 
            value={input}
            onChange={(event)=>setInput(event.target.value)} 
            type="text" 
            name="text" 
            placeholder= "Enter a task"
            />

            <button type="submit">
                  Add
            </button>
            </form>
        <ul>
            {todo.map((task) => (
                    <li key={task}>
                        {task}
                        <button onClick={()=>handleDelete(task)}
                         >Delete</button>
                    </li>
                
                ))
            }
        </ul>
        </div>
     );
}
 
export default TodoList;