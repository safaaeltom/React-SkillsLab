import { useState, useEffect } from 'react';

const TodoList = () => {
    const [input, setInput] = useState("");
    const [todo, setTodo] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [editingTask, setEditingTask] = useState(null);
    const [editInput, setEditInput] = useState("")

    const handleAdd = () => {
        const newTodo = input.trim();

        if(newTodo==="") {
            return;
        }

        if(todo.includes(newTodo)) {
            setInput("");
            return;
        }

        setTodo([...todo, newTodo]);
        setInput("");
        };

    const handleDelete = (taskToDelete) => {
        setTodo(todo.filter((task) => task !== taskToDelete));
    };

    const handleEdit = (oldTask, newTask) => {
        const trimmedTask = newTask.trim();

        if (trimmedTask === "") {
            setEditingTask(null);
            setEditInput("");
            return;
        }

        if (todo.includes(trimmedTask) && trimmedTask!==oldTask){
            setEditingTask(null)
            setEditInput("");
            return;
        }

        setTodo(
            todo.map((task) => {
            if (task === oldTask) {
            return trimmedTask;
            }

            return task;
            })
        );

      setEditingTask(null);
      setEditInput("");
    }; 

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
                        {task === editingTask ? (
                            <>
                                <input
                                    value={editInput}
                                    onChange={(e) => setEditInput(e.target.value)}
                                />

                                <button onClick={() => handleEdit(task, editInput)
                                    
                                }>
                                    Save
                                </button>
                            </>
                        ) : (
                            <>
                                {task}

                                <button onClick={() => handleDelete(task)}>
                                    Delete
                                </button>

                                <button
                                    onClick={() => {
                                        setEditingTask(task);
                                        setEditInput(task);
                                    }}
                                >
                                    Edit
                                </button>
                            </>
                        )}
                    </li>
                
                ))
            }
        </ul>
        </div>
     );
}
 
export default TodoList;