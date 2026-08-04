import { useState } from 'react';

const TodoList = () => {
    const [input, setInput] = useState("");
    
    return ( 
        <div>
            <h2>My Todo List</h2>

            <input 
            value={input}
            onChange={(event)=setInput(event.target.value)} 
            type="text" 
            name="text" 
            placeholder= "Enter a task"
            />

            <button>Add</button>
        </div>
     );
}
 
export default TodoList;