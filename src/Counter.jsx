import CounterMessage from'./CounterMessage'
import { useState } from 'react';
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    return ( 
        <div>
            <div className="progress-container">
                <div style={{ width: count*10 + "%" }} className="progress-bar"></div>
            </div>
            <h1>{count*10}%</h1>
            <button onClick = {()=>{if(count<10){setCount(count +1)}}}>Increase</button>
            <button onClick = {()=>{if(count>0){setCount(count -1)}}}>Decrease</button>
            <button onClick = {()=>setCount(0)}>Reset</button>
            < CounterMessage count={count}/>
        </div>
     );
}
 
export default Counter;