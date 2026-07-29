import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return ( 
        <div>
            <h1>{count}</h1>
            <button onClick = {()=>{if(count<10){setCount(count +1)}}}>Increase</button>
            <button onClick = {()=>{if(count>0){setCount(count -1)}}}>Decrease</button>
            <button onClick = {()=>setCount(0)}>Reset</button>

            {count===5 && <h3>Half way!</h3>}
            {count===10 && <h3>Maximum reached!</h3>}
        </div>
     );
}
 
export default Counter;