import { useState } from 'react';

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);

    const handleAdd = () =>{
        const trimmedInput= input.trim();

        if(trimmedInput.length > 0) {
                setTodo([...todo, trimmedInput])
                setInput("")
                }};
    return ( 
        <div>
            <h2>My Todo List</h2>

            <input 
            value={input}
            onChange={(event)=>setInput(event.target.value)} 
            type="text" 
            name="text" 
            placeholder= "Enter a task"
            />

            <button onClick={handleAdd}>
                  Add
                </button>
        <ul>
           {todo.map((task) => {
                return (
                    <li key={task}>{task}</li>
                );
              })
            }
        </ul>
        </div>
     );
}
 
export default TodoList;