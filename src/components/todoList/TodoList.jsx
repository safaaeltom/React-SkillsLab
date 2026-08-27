import { useState } from 'react';

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);

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